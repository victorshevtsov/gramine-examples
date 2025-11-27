# Output

```
Gramine is starting. Parsing TOML manifest file, this may take some time...
(host_main.c:914:load_enclave) debug: Gramine parsed TOML manifest file successfully
(host_framework.c:166:create_enclave) debug: Enclave created:
(host_framework.c:167:create_enclave) debug:     base:           0x0000000000000000
(host_framework.c:168:create_enclave) debug:     size:           0x0000000200000000
(host_framework.c:169:create_enclave) debug:     misc_select:    0x00000000
(host_framework.c:170:create_enclave) debug:     attr.flags:     0x0000000000000005
(host_framework.c:171:create_enclave) debug:     attr.xfrm:      0x00000000000000e7
(host_framework.c:172:create_enclave) debug:     ssa_frame_size: 4
(host_main.c:444:initialize_enclave) debug: Adding pages to SGX enclave, this may take some time...
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feefa000-0x200000000 [REG:R--] (manifest) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feafa000-0x1feefa000 [REG:RW-] (ssa) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fea7a000-0x1feafa000 [TCS:---] (tcs) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe9fa000-0x1fea7a000 [REG:RW-] (tls) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe9ba000-0x1fe9fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe97a000-0x1fe9ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe93a000-0x1fe97a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe8fa000-0x1fe93a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe8ba000-0x1fe8fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe87a000-0x1fe8ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe83a000-0x1fe87a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe7fa000-0x1fe83a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe7ba000-0x1fe7fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe77a000-0x1fe7ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe73a000-0x1fe77a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe6fa000-0x1fe73a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe6ba000-0x1fe6fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe67a000-0x1fe6ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe63a000-0x1fe67a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe5fa000-0x1fe63a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe5ba000-0x1fe5fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe57a000-0x1fe5ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe53a000-0x1fe57a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe4fa000-0x1fe53a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe4ba000-0x1fe4fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe47a000-0x1fe4ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe43a000-0x1fe47a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe3fa000-0x1fe43a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe3ba000-0x1fe3fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe37a000-0x1fe3ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe33a000-0x1fe37a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe2fa000-0x1fe33a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe2ba000-0x1fe2fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe27a000-0x1fe2ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe23a000-0x1fe27a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe1fa000-0x1fe23a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe1ba000-0x1fe1fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe17a000-0x1fe1ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe13a000-0x1fe17a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe0fa000-0x1fe13a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe0ba000-0x1fe0fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe07a000-0x1fe0ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe03a000-0x1fe07a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdffa000-0x1fe03a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdfba000-0x1fdffa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdf7a000-0x1fdfba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdf3a000-0x1fdf7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdefa000-0x1fdf3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdeba000-0x1fdefa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fde7a000-0x1fdeba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fde3a000-0x1fde7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fddfa000-0x1fde3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fddba000-0x1fddfa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdd7a000-0x1fddba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdd3a000-0x1fdd7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdcfa000-0x1fdd3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdcba000-0x1fdcfa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdc7a000-0x1fdcba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdc3a000-0x1fdc7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdbfa000-0x1fdc3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdbba000-0x1fdbfa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdb7a000-0x1fdbba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdb3a000-0x1fdb7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdafa000-0x1fdb3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdaba000-0x1fdafa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fda7a000-0x1fdaba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fda3a000-0x1fda7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd9fa000-0x1fda3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd9ba000-0x1fd9fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd97a000-0x1fd9ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd93a000-0x1fd97a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8fa000-0x1fd93a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8ba000-0x1fd8fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd87a000-0x1fd8ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd83a000-0x1fd87a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7fa000-0x1fd83a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7ba000-0x1fd7fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd77a000-0x1fd7ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd73a000-0x1fd77a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6fa000-0x1fd73a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6ba000-0x1fd6fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd67a000-0x1fd6ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd63a000-0x1fd67a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5fa000-0x1fd63a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5ba000-0x1fd5fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd57a000-0x1fd5ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd53a000-0x1fd57a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4fa000-0x1fd53a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4ba000-0x1fd4fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd47a000-0x1fd4ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd43a000-0x1fd47a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3fa000-0x1fd43a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3ba000-0x1fd3fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd37a000-0x1fd3ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd33a000-0x1fd37a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2fa000-0x1fd33a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2ba000-0x1fd2fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd27a000-0x1fd2ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd23a000-0x1fd27a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1fa000-0x1fd23a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1ba000-0x1fd1fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd17a000-0x1fd1ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd13a000-0x1fd17a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd0fa000-0x1fd13a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd0ba000-0x1fd0fa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd07a000-0x1fd0ba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd03a000-0x1fd07a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcffa000-0x1fd03a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcfba000-0x1fcffa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcf7a000-0x1fcfba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcf3a000-0x1fcf7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcefa000-0x1fcf3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fceba000-0x1fcefa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fce7a000-0x1fceba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fce3a000-0x1fce7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcdfa000-0x1fce3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcdba000-0x1fcdfa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcd7a000-0x1fcdba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcd3a000-0x1fcd7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fccfa000-0x1fcd3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fccba000-0x1fccfa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcc7a000-0x1fccba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcc3a000-0x1fcc7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcbfa000-0x1fcc3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcbba000-0x1fcbfa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcb7a000-0x1fcbba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcb3a000-0x1fcb7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcafa000-0x1fcb3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fcaba000-0x1fcafa000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fca7a000-0x1fcaba000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fca3a000-0x1fca7a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc9fa000-0x1fca3a000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc9ea000-0x1fc9fa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc9da000-0x1fc9ea000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc9ca000-0x1fc9da000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc9ba000-0x1fc9ca000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc9aa000-0x1fc9ba000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc99a000-0x1fc9aa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc98a000-0x1fc99a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc97a000-0x1fc98a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc96a000-0x1fc97a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc95a000-0x1fc96a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc94a000-0x1fc95a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc93a000-0x1fc94a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc92a000-0x1fc93a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc91a000-0x1fc92a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc90a000-0x1fc91a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc8fa000-0x1fc90a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc8ea000-0x1fc8fa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc8da000-0x1fc8ea000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc8ca000-0x1fc8da000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc8ba000-0x1fc8ca000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc8aa000-0x1fc8ba000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc89a000-0x1fc8aa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc88a000-0x1fc89a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc87a000-0x1fc88a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc86a000-0x1fc87a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc85a000-0x1fc86a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc84a000-0x1fc85a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc83a000-0x1fc84a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc82a000-0x1fc83a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc81a000-0x1fc82a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc80a000-0x1fc81a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc7fa000-0x1fc80a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc7ea000-0x1fc7fa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc7da000-0x1fc7ea000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc7ca000-0x1fc7da000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc7ba000-0x1fc7ca000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc7aa000-0x1fc7ba000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc79a000-0x1fc7aa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc78a000-0x1fc79a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc77a000-0x1fc78a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc76a000-0x1fc77a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc75a000-0x1fc76a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc74a000-0x1fc75a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc73a000-0x1fc74a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc72a000-0x1fc73a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc71a000-0x1fc72a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc70a000-0x1fc71a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc6fa000-0x1fc70a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc6ea000-0x1fc6fa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc6da000-0x1fc6ea000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc6ca000-0x1fc6da000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc6ba000-0x1fc6ca000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc6aa000-0x1fc6ba000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc69a000-0x1fc6aa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc68a000-0x1fc69a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc67a000-0x1fc68a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc66a000-0x1fc67a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc65a000-0x1fc66a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc64a000-0x1fc65a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc63a000-0x1fc64a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc62a000-0x1fc63a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc61a000-0x1fc62a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc60a000-0x1fc61a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc5fa000-0x1fc60a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc5ea000-0x1fc5fa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc5da000-0x1fc5ea000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc5ca000-0x1fc5da000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc5ba000-0x1fc5ca000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc5aa000-0x1fc5ba000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc59a000-0x1fc5aa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc58a000-0x1fc59a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc57a000-0x1fc58a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc56a000-0x1fc57a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc55a000-0x1fc56a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc54a000-0x1fc55a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc53a000-0x1fc54a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc52a000-0x1fc53a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc51a000-0x1fc52a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc50a000-0x1fc51a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc4fa000-0x1fc50a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc4ea000-0x1fc4fa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc4da000-0x1fc4ea000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc4ca000-0x1fc4da000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc4ba000-0x1fc4ca000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc4aa000-0x1fc4ba000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc49a000-0x1fc4aa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc48a000-0x1fc49a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc47a000-0x1fc48a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc46a000-0x1fc47a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc45a000-0x1fc46a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc44a000-0x1fc45a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc43a000-0x1fc44a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc42a000-0x1fc43a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc41a000-0x1fc42a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc40a000-0x1fc41a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc3fa000-0x1fc40a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc3ea000-0x1fc3fa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc3da000-0x1fc3ea000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc3ca000-0x1fc3da000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc3ba000-0x1fc3ca000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc3aa000-0x1fc3ba000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc39a000-0x1fc3aa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc38a000-0x1fc39a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc37a000-0x1fc38a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc36a000-0x1fc37a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc35a000-0x1fc36a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc34a000-0x1fc35a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc33a000-0x1fc34a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc32a000-0x1fc33a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc31a000-0x1fc32a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc30a000-0x1fc31a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc2fa000-0x1fc30a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc2ea000-0x1fc2fa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc2da000-0x1fc2ea000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc2ca000-0x1fc2da000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc2ba000-0x1fc2ca000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc2aa000-0x1fc2ba000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc29a000-0x1fc2aa000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc28a000-0x1fc29a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc27a000-0x1fc28a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc26a000-0x1fc27a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc25a000-0x1fc26a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc24a000-0x1fc25a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc23a000-0x1fc24a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc22a000-0x1fc23a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc21a000-0x1fc22a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc20a000-0x1fc21a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc1fa000-0x1fc20a000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc1a0000-0x1fc1f1000 [REG:R-X] (code) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc1f1000-0x1fc1f4000 [REG:RW-] (data) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fc1f4000-0x1fc1fa000 [REG:RW-] (bss) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x10000-0x1fc1a0000 [REG:RWX] (free)
(host_main.c:526:initialize_enclave) debug: Added all pages to SGX enclave
(host_framework.c:449:init_enclave) debug: Enclave initializing:
(host_framework.c:450:init_enclave) debug:     enclave id:   0x00000001fffff000
(host_framework.c:451:init_enclave) debug:     mr_enclave:   0664fe2ce142f7aee5ad9b0fad29a00dee40c4acae01c17444cc63d9a295846a
(host_framework.c:454:init_enclave) debug:     isv_prod_id:  0
(host_framework.c:455:init_enclave) debug:     isv_svn:      0
(pal_main.c:415:print_warning_on_invariant_tsc) warning: Could not set up Invariant TSC (CPU is too old or you run on a VM that does not expose corresponding CPUID leaves). This degrades performance.
(libos_init.c:387:libos_init) debug: Gramine was built from commit: ff71d7afea730dffd56a97af39bb6a73ee6c7662
(libos_init.c:389:libos_init) debug: Host: Linux-SGX
(libos_context.c:70:libos_xstate_init) debug: LibOS xsave_enabled 1, xsave_size 0xa80(2688), xsave_features 0xe7
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc15f000-0x1fc1a0000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc15e000-0x1fc15f000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc15d000-0x1fc15e000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc15c000-0x1fc15d000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc15b000-0x1fc15c000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc159000-0x1fc15b000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc158000-0x1fc159000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc157000-0x1fc158000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc156000-0x1fc157000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc154000-0x1fc156000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc151000-0x1fc154000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc150000-0x1fc151000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc14e000-0x1fc150000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc14b000-0x1fc14e000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc14a000-0x1fc14b000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc145000-0x1fc14a000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc142000-0x1fc145000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc13d000-0x1fc142000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc13b000-0x1fc13d000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc132000-0x1fc13b000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc12c000-0x1fc132000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc123000-0x1fc12c000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc11e000-0x1fc123000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc119000-0x1fc11d000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc108000-0x1fc119000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc106000-0x1fc108000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc0f9000-0x1fc104000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc0e8000-0x1fc0f9000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc0e5000-0x1fc0e8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc0dc000-0x1fc0e3000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc0b5000-0x1fc0d6000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc0a4000-0x1fc0b5000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc08a000-0x1fc09f000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc069000-0x1fc08a000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc060000-0x1fc069000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc053000-0x1fc060000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc007000-0x1fc048000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbfc5000-0x1fbfee000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbf84000-0x1fbfc5000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbf03000-0x1fbf84000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbed3000-0x1fbeec000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbeb2000-0x1fbed3000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbe51000-0x1fbea2000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbe20000-0x1fbe51000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbd9b000-0x1fbe1c000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbcfa000-0x1fbd9b000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbbf9000-0x1fbcfa000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbb78000-0x1fbbf9000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fbb37000-0x1fbb78000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fba26000-0x1fbb27000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fb795000-0x1fb996000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fb654000-0x1fb795000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fb453000-0x1fb654000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fb252000-0x1fb453000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fb12a000-0x1fb22b000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fad29000-0x1fb12a000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1faa42000-0x1fad29000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fa641000-0x1faa42000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fa3c0000-0x1fa641000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fa230000-0x1fa2f8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1f99cb000-0x1fa1cc000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1f95ca000-0x1f99cb000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1f8dc9000-0x1f95ca000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1f88c8000-0x1f8dc9000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1f74dc000-0x1f84dd000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1f6adb000-0x1f74dc000 (PAL internal me) bookkeeped
(libos_vma.c:694:init_vma) debug: ASLR top address adjusted to 0x1d86af000
(libos_fs_encrypted.c:454:get_or_create_encrypted_files_key) debug: Successfully retrieved special key "_sgx_mrenclave"
(libos_fs_encrypted.c:454:get_or_create_encrypted_files_key) debug: Successfully retrieved special key "_sgx_mrsigner"
(attestation.c:366:init_sgx_attestation) debug: host is Linux-SGX and remote attestation type is 'none', skipping /dev/attestation/quote file
(warn.c:115:print_warnings_on_insecure_configs) -----------------------------------------------------------------------------------------------------------------------
(warn.c:117:print_warnings_on_insecure_configs) Gramine detected the following insecure configurations:

(warn.c:124:print_warnings_on_insecure_configs)   - loader.log_level = warning|debug|trace|all (verbose log level, may leak information)
(warn.c:164:print_warnings_on_insecure_configs)
Gramine will continue application execution, but this configuration must not be used in production!
(warn.c:166:print_warnings_on_insecure_configs) -----------------------------------------------------------------------------------------------------------------------

(libos_init.c:420:libos_init) debug: LibOS loaded at 0x1fa230000, ready to initialize
(libos_init.c:583:create_pipe) debug: Creating pipe: pipe.srv:2689662689138464062/acf2a3e0858ffe182d93ee6adea3427c02fc60657b4c3ef5dfb2d4ab0750b154
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "file:/" (chroot) under /
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "proc" (pseudo) under /proc
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "dev" (pseudo) under /dev
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "sys" (pseudo) under /sys
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/bf0b331f28b2ba163e4afebc37236e477e28a685c5a64ce48bc1144370794075
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/87403b0617b1f78e0598804584d0a9bf6023da0712be22b0ad6270b38ee8eebb
(libos_async.c:126:libos_async_worker) [P1:libos] debug: Async worker thread started
(libos_init.c:308:init_stack) [P1:T1:node] debug: Allocated stack at 0x1d84af000 (size = 0x200000)
(libos_rtld.c:853:load_elf_object) [P1:T1:node] debug: loading "file://gramine/app_files/node"
(libos_rtld.c:907:find_interp) [P1:T1:node] debug: searching for interpreter: /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/ld-linux-x86-64.so.2
(libos_rtld.c:853:load_elf_object) [P1:T1:node] debug: loading "file://gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/ld-linux-x86-64.so.2"
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/1
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/fa8cb2195d1dbaff220ceed146659a7c6bddd6e984e98533f6585dcac6fb22aa
(libos_ipc_worker.c:372:ipc_worker_wrapper) [P1:libos] debug: IPC worker started
(libos_init.c:528:libos_init) [P1:T1:node] debug: LibOS initialized
(libos_rtld.c:1053:register_library) [P1:T1:node] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libdl.so.2 loaded at 0x1d846f000
(libos_rtld.c:1053:register_library) [P1:T1:node] debug: glibc register library /usr/lib/x86_64-linux-gnu/libstdc++.so.6 loaded at 0x1d8255000
(libos_rtld.c:1053:register_library) [P1:T1:node] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libm.so.6 loaded at 0x1d8177000
(libos_rtld.c:1053:register_library) [P1:T1:node] debug: glibc register library /usr/lib/x86_64-linux-gnu/libgcc_s.so.1 loaded at 0x1d8157000
(libos_rtld.c:1053:register_library) [P1:T1:node] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libpthread.so.0 loaded at 0x1d8152000
(libos_rtld.c:1053:register_library) [P1:T1:node] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libc.so.6 loaded at 0x1d7f7c000
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call rseq
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call prctl
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call io_uring_setup
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/3e84a4ee2722d6c9c0fd3a37cfeced3cfe0be8d8dde1be8ff4ce38d2bcf7ef20
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/686d96e96349bf471e91b9ff7657afa067fcdfbe9bf0d268849e2fca7b333b1c
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call clone3
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/00ff97343fdbb5f667d95c72757f9b709f48d6d27ee6366de81e49af1bcb9599
(libos_futex.c:755:_libos_syscall_futex) [P1:T1:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T2:node] warning: Unsupported system call prctl
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T2:node] warning: Unsupported system call io_uring_setup
(libos_init.c:583:create_pipe) [P1:T2:node] debug: Creating pipe: pipe.srv:2689662689138464062/6750f60526e71183786871470075026a60195376c4a6302f023671b90e6328ce
(libos_epoll.c:368:do_epoll_add) [P1:T2:node] debug: epoll: added 10 (0x1fc04b600) to epoll handle 0x1fc04b3c8
(libos_epoll.c:368:do_epoll_add) [P1:T2:node] debug: epoll: added 12 (0x1fc04ba70) to epoll handle 0x1fc04b3c8
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/cd938f24dcb7e64011a10804fa1b1f0937bf9d9bf7f13704ed095c1c02da9591
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T3:node] warning: Unsupported system call prctl
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/581df9fd4b5aa88ee8c44c7e38275d331332d26c13e32db804b2ef798e0d8490
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T4:node] warning: Unsupported system call prctl
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/db3f3baa6ef023ffccfa3130c26e3725cfc28c5caac8494b6083e2fdb9d909fa
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T5:node] warning: Unsupported system call prctl
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/44f80489119d7673c95cc94aec38e1801360d78226b66f9bdd8a8ed0122bfe16
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T6:node] warning: Unsupported system call prctl
(libos_futex.c:755:_libos_syscall_futex) [P1:T6:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T1:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T3:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T5:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T4:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call io_uring_setup
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/d13b025187893bd95484814b158a87a5e4f3a0c1d6c33f6eec0ca09a27a5c421
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_init.c:583:create_pipe) [P1:T1:node] debug: Creating pipe: pipe.srv:2689662689138464062/1049a4a150880368d917d8cb980ceddbe31e50043156a2edd4f2b79109af9329
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T7:node] warning: Unsupported system call prctl
(libos_futex.c:755:_libos_syscall_futex) [P1:T7:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call capget
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:node] warning: Unsupported system call statx
(libos_epoll.c:368:do_epoll_add) [P1:T1:node] debug: epoll: added 14 (0x1fc04bee0) to epoll handle 0x1fc04bca8
(libos_epoll.c:368:do_epoll_add) [P1:T1:node] debug: epoll: added 16 (0x1fc04c350) to epoll handle 0x1fc04bca8
(libos_futex.c:755:_libos_syscall_futex) [P1:T1:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
Hello World!
(libos_futex.c:755:_libos_syscall_futex) [P1:T6:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T1:node] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:759:_libos_syscall_futex) [P1:T1:node] warning: Non-private futexes are not supported, assuming implicit FUTEX_PRIVATE_FLAG
(libos_exit.c:215:libos_syscall_exit) [P1:T6:node] debug: ---- exit (returning 0)
(libos_async.c:109:install_async_event) [P1:T6:node] debug: Installed async event at 1764240298591612
(libos_exit.c:215:libos_syscall_exit) [P1:T4:node] debug: ---- exit (returning 0)
(libos_async.c:109:install_async_event) [P1:T4:node] debug: Installed async event at 1764240298592124
(libos_exit.c:215:libos_syscall_exit) [P1:T5:node] debug: ---- exit (returning 0)
(libos_async.c:109:install_async_event) [P1:T5:node] debug: Installed async event at 1764240298592473
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_exit.c:215:libos_syscall_exit) [P1:T3:node] debug: ---- exit (returning 0)
(libos_async.c:109:install_async_event) [P1:T3:node] debug: Installed async event at 1764240298592875
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_exit.c:215:libos_syscall_exit) [P1:T2:node] debug: ---- exit (returning 0)
(libos_async.c:109:install_async_event) [P1:T2:node] debug: Installed async event at 1764240298593409
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_epoll.c:368:do_epoll_add) [P1:T1:node] debug: epoll: added 6 (0x1fc04ad20) to epoll handle 0x1fc04a678
(libos_epoll.c:368:do_epoll_add) [P1:T1:node] debug: epoll: added 8 (0x1fc04b190) to epoll handle 0x1fc04a678
(libos_exit.c:205:libos_syscall_exit_group) [P1:T1:node] debug: ---- exit_group (returning 0)
(libos_async.c:109:install_async_event) [P1:T7:node] debug: Installed async event at 1764240298594559
(libos_fs_lock.c:785:file_lock_clear_pid) [P1:T1:node] debug: clearing file (POSIX) locks for pid 1
(libos_sync_client.c:331:shutdown_sync_client) [P1:T1:node] debug: sync client shutdown: closing handles
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_sync_client.c:346:shutdown_sync_client) [P1:T1:node] debug: sync client shutdown: waiting for confirmation
(libos_sync_client.c:359:shutdown_sync_client) [P1:T1:node] debug: sync client shutdown: finished
(libos_async.c:293:libos_async_worker) [P1:libos] debug: Async worker thread terminated
(libos_ipc_worker.c:285:ipc_worker_main) [P1:libos] debug: IPC worker: exiting worker thread
(libos_exit.c:51:libos_clean_and_exit) [P1:T1:node] debug: process 1 exited with status 0
```
