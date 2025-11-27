BUN_PATH = /usr/local/bin/bun

ARCH_LIBDIR ?= /lib/$(shell $(CC) -dumpmachine)

ifeq ($(SGX),)
GRAMINE = gramine-direct
else
GRAMINE = gramine-sgx
endif

ifeq ($(DEBUG),1)
GRAMINE_LOG_LEVEL = debug
else
GRAMINE_LOG_LEVEL = error
endif

.PHONY: all
all: bun.manifest
ifeq ($(SGX),1)
all: bun.manifest.sgx bun.sig
endif

bun.manifest: bun.manifest.template hello-world.js
	gramine-manifest \
		-Dlog_level=$(GRAMINE_LOG_LEVEL) \
		-Darch_libdir=$(ARCH_LIBDIR) \
		-Dbun_path=$(BUN_PATH) \
		$< >$@

bun.manifest.sgx bun.sig: sgx_sign
	@:

.INTERMEDIATE: sgx_sign
sgx_sign: bun.manifest
	gramine-sgx-sign \
		--manifest $< \
		--output $<.sgx

.PHONY: check
check: all
	$(GRAMINE) ./bun hello-world.js > OUTPUT
	@grep -q "Hello World" OUTPUT && echo "[ Success 1/1 ]"
	@rm OUTPUT

.PHONY: clean
clean:
	$(RM) *.manifest *.manifest.sgx *.sig
