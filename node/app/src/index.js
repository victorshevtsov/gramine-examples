const fs = require('fs');
const { AttestationClient } = require("@azure/attestation");
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");


function runTimeData(data = null) {
  const userData = Buffer.alloc(64);

  if (data) {
    const hash = require('crypto').createHash('sha256')
      .update(data).digest();
    hash.copy(userData);
  }

  console.log("userData: ", userData.toString("hex"));

  return userData;
}

function generateSGXQuote(runTimeData) {
  fs.writeFileSync('/dev/attestation/user_report_data', runTimeData);

  const quote = fs.readFileSync('/dev/attestation/quote');

  return quote;
}

async function getAttestationToken(sgxQuote, attestationEndpoint, runTimeData) {
  const client = new AttestationClient(attestationEndpoint);

  let openIdMetadata = await client.getOpenIdMetadata();
  console.log("openIdMetadata: ", openIdMetadata);

  // let signers = await client.getAttestationSigners();
  // console.log("Signers: ", signers);

  const result = await client.attestSgxEnclave(
    sgxQuote,
    // sgxQuote.toString('base64url')
    { runTimeData }
  );

  return result.token;
}

async function main() {
  const attestationEndpoint = "https://sharedcus.cus.attest.azure.net";
  // const attestationEndpoint = "https://attestationprovider.eau.attest.azure.net";
  const keyVaultUrl = "https://broker-mm-3.vault.azure.net";

  // Generate quote
  console.log("Generating SGX quote...");
  // const quote = generateSGXQuote();
  const data = runTimeData("test-test-test");
  const quote = generateSGXQuote(data);
  console.log("Quote: ", quote.toString("hex"));

  // Get attestation token
  console.log("Getting attestation token...");
  const token = await getAttestationToken(quote, attestationEndpoint, data);
  console.log("token: ", token);

  // DefaultAzureCredential will automatically use 
  // ManagedIdentity in Azure environments
  const credential = new DefaultAzureCredential();

  // Use with Key Vault client
  const client = new SecretClient(keyVaultUrl, credential);

  console.info("Loading all secrets from Key Vault...");

  for await (const secretProperties of client.listPropertiesOfSecrets()) {
    if (secretProperties.name && secretProperties.enabled) {
      try {
        client
        const secret = await client.getSecret(secretProperties.name);
        if (secret.value) {
          console.info(`Loaded secret: ${secretProperties.name}`);
        }
      } catch (error) {
        console.warn(`Failed to load secret ${secretProperties.name}:`, error);
      }
    }
  }
}

main()
  .then(() => {
    console.info("Success");
  })
  .catch((error) => {
    console.error("Failed: ", error);
    process.exit(1);
  });