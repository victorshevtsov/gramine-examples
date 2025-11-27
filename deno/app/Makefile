DENO_PATH = /usr/bin/deno

ARCH_LIBDIR = /lib/x86_64-linux-gnu
# ARCH_LIBDIR ?= /lib/$(shell $(CC) -dumpmachine)

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
all: deno.manifest
ifeq ($(SGX),1)
all: deno.manifest.sgx deno.sig
endif

deno.manifest: deno.manifest.template hello-world.js
	gramine-manifest \
		-Dlog_level=$(GRAMINE_LOG_LEVEL) \
		-Darch_libdir=$(ARCH_LIBDIR) \
		-Ddeno_path=$(DENO_PATH) \
		$< >$@

deno.manifest.sgx deno.sig: sgx_sign
	@:

.INTERMEDIATE: sgx_sign
sgx_sign: deno.manifest
	gramine-sgx-sign \
		--manifest $< \
		--output $<.sgx

.PHONY: check
check: all
	$(GRAMINE) ./deno hello-world.js > OUTPUT
	@grep -q "Hello World" OUTPUT && echo "[ Success 1/1 ]"
	@rm OUTPUT

.PHONY: clean
clean:
	$(RM) *.manifest *.manifest.sgx *.sig
