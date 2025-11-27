## Build gramine-deno docker image

```shell
docker build -t gramine-deno ./
```

```shell
docker run -it --rm \
  --device /dev/sgx_enclave \
  --device /dev/sgx_provision \
  --volume $(pwd)/app:/app \
  --workdir /app \
  gramine-deno \
  bash
```

```shell
gramine-sgx-gen-private-key
```

```shell
DEBUG=1 SGX=1 make check
```