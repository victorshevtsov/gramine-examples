NODE_PATH = /usr/local/bin/node

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
all: node.manifest
ifeq ($(SGX),1)
all: node.manifest.sgx node.sig
endif

node.manifest: node.manifest.template ./dist/index.cjs
	gramine-manifest \
		-Dlog_level=$(GRAMINE_LOG_LEVEL) \
		-Darch_libdir=$(ARCH_LIBDIR) \
		-Dnode_path=$(NODE_PATH) \
		$< >$@

node.manifest.sgx node.sig: sgx_sign
	@:

.INTERMEDIATE: sgx_sign
sgx_sign: node.manifest
	gramine-sgx-sign \
		--manifest $< \
		--output $<.sgx

.PHONY: check
check: all
	$(GRAMINE) ./node ./dist/index.cjs > OUTPUT
	@grep -q "Hello World" OUTPUT && echo "[ Success 1/1 ]"
	@rm OUTPUT

.PHONY: clean
clean:
	$(RM) *.manifest *.manifest.sgx *.sig
