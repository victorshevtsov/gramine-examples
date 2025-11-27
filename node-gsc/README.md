# Node app in Gramine Shielded Container

See [Gramine Shielded Containers](https://gramine.readthedocs.io/projects/gsc/en/latest/) for the original instruction.

## Build docker image with the application

```shell
docker build -t hello-node ./
```

Ensure if the app prints "Hello World!"

```shell
docker run -it --rm hello-node
```

## Graminize the docker image

Clone `gsc` - Gramine Shielded Containers

```shell
git clone https://github.com/gramineproject/gsc
```

Change into the dir with cloned `gsc` and run all the following scripts there

Copy default configuration from the template

```shell
cp config.yaml.template config.yaml
```

Create manifest for the docker image

```shell
cat > hello-node.manifest << EOF
loader.log_level = "debug"

# For better performance.
libos.check_invalid_pointers = false

sys.stack.size = "2M"
sgx.enclave_size = "8G"
sgx.max_threads = 128
EOF
```

Build graminized unsigned image

```shell
./gsc build hello-node hello-node.manifest
```

Generate signing key

```shell
openssl genrsa -3 -out hello-node-key.pem 3072
```

Sign the container

```shell
./gsc sign-image hello-node hello-node-key.pem
```

Execute with `gramine-sgx`

```shell
docker run \
  --device=/dev/sgx_enclave \
  --volume /var/run/aesmd/aesm.socket:/var/run/aesmd/aesm.socket \
  gsc-hello-node
```

Execute with `gramine-direct`

```shell
docker run \
  --env GRAMINE_MODE=direct \
  --security-opt seccomp=../docker_seccomp_aug_2022.json \
  gsc-hello-node
```

## Result

See in [OUTPUT.md](OUTPUT.md)
