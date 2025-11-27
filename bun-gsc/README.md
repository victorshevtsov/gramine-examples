# Bun app in Gramine Shielded Container

See [Gramine Shielded Containers](https://gramine.readthedocs.io/projects/gsc/en/latest/) for the original instruction.

## Build docker image with the application

```shell
docker build -t hello-bun ./
```

Ensure if the app prints "Hello World!"

```shell
docker run -it --rm hello-bun
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
cat > hello-bun.manifest << EOF
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
./gsc build hello-bun hello-bun.manifest
```

Generate signing key

```shell
openssl genrsa -3 -out hello-bun-key.pem 3072
```

Sign the container

```shell
./gsc sign-image hello-bun hello-bun-key.pem
```

Execute with `gramine-sgx`

```shell
docker run \
  --device=/dev/sgx_enclave \
  --volume /var/run/aesmd/aesm.socket:/var/run/aesmd/aesm.socket \
  gsc-hello-bun
```

Execute with `gramine-direct`

```shell
docker run \
  --env GRAMINE_MODE=direct \
  --security-opt seccomp=../docker_seccomp_aug_2022.json \
  gsc-hello-bun
```

## Result

See in [OUTPUT.md](OUTPUT.md)
