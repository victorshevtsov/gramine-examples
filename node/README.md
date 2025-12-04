## Build gramine-node docker image

```shell
docker build -t gramine-node ./
```

```shell
docker run -it --rm \
  --device /dev/sgx_enclave \
  --device /dev/sgx_provision \
  --volume /var/run/aesmd/aesm.socket:/var/run/aesmd/aesm.socket \
  --volume $(pwd)/app:/app \
  --workdir /app \
  gramine-node \
  bash
```

```shell
gramine-sgx-gen-private-key
```

```shell
DEBUG=1 SGX=1 make check
```