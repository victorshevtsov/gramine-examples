# Gramine Examples

The repo shows a bunch of attempts to run a simple hello-world application in Gramin SGX runtime with different JavaScript engines: NodeJS, Deno and Bun.

Thee are two approaches taken:
- install Gramine SGX Runtime into a JS engine image (`node:24`, `denoland/deno:ubuntu`, `oven/bun`),  then run the app in the container
- build a regular docker image with JS runtime and the app, then graminize the image using [gsc](https://gramine.readthedocs.io/projects/gsc/en/latest/) tool

See the examples in the correspoindign directroies:
- [`bun`](bun/README.md)
- [`bun-gsc`](bun-gsc/README.md)
- [`deno`](deno/README.md)
- [`deno-gsc`](deno-gsc/README.md)
- [`node`](node/README.md)
- [`node-gsc`](node-gsc/README.md)
