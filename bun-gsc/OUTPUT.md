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
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ffd76000-0x200000000 [REG:R--] (manifest) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff976000-0x1ffd76000 [REG:RW-] (ssa) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff8f6000-0x1ff976000 [TCS:---] (tcs) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff876000-0x1ff8f6000 [REG:RW-] (tls) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff836000-0x1ff876000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff7f6000-0x1ff836000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff7b6000-0x1ff7f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff776000-0x1ff7b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff736000-0x1ff776000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff6f6000-0x1ff736000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff6b6000-0x1ff6f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff676000-0x1ff6b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff636000-0x1ff676000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff5f6000-0x1ff636000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff5b6000-0x1ff5f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff576000-0x1ff5b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff536000-0x1ff576000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff4f6000-0x1ff536000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff4b6000-0x1ff4f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff476000-0x1ff4b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff436000-0x1ff476000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff3f6000-0x1ff436000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff3b6000-0x1ff3f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff376000-0x1ff3b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff336000-0x1ff376000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff2f6000-0x1ff336000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff2b6000-0x1ff2f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff276000-0x1ff2b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff236000-0x1ff276000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff1f6000-0x1ff236000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff1b6000-0x1ff1f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff176000-0x1ff1b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff136000-0x1ff176000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff0f6000-0x1ff136000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff0b6000-0x1ff0f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff076000-0x1ff0b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff036000-0x1ff076000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feff6000-0x1ff036000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fefb6000-0x1feff6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fef76000-0x1fefb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fef36000-0x1fef76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feef6000-0x1fef36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feeb6000-0x1feef6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fee76000-0x1feeb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fee36000-0x1fee76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fedf6000-0x1fee36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fedb6000-0x1fedf6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fed76000-0x1fedb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fed36000-0x1fed76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fecf6000-0x1fed36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fecb6000-0x1fecf6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fec76000-0x1fecb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fec36000-0x1fec76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1febf6000-0x1fec36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1febb6000-0x1febf6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feb76000-0x1febb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feb36000-0x1feb76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feaf6000-0x1feb36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feab6000-0x1feaf6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fea76000-0x1feab6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fea36000-0x1fea76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe9f6000-0x1fea36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe9b6000-0x1fe9f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe976000-0x1fe9b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe936000-0x1fe976000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe8f6000-0x1fe936000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe8b6000-0x1fe8f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe876000-0x1fe8b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe836000-0x1fe876000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe7f6000-0x1fe836000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe7b6000-0x1fe7f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe776000-0x1fe7b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe736000-0x1fe776000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe6f6000-0x1fe736000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe6b6000-0x1fe6f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe676000-0x1fe6b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe636000-0x1fe676000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe5f6000-0x1fe636000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe5b6000-0x1fe5f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe576000-0x1fe5b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe536000-0x1fe576000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe4f6000-0x1fe536000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe4b6000-0x1fe4f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe476000-0x1fe4b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe436000-0x1fe476000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe3f6000-0x1fe436000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe3b6000-0x1fe3f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe376000-0x1fe3b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe336000-0x1fe376000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe2f6000-0x1fe336000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe2b6000-0x1fe2f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe276000-0x1fe2b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe236000-0x1fe276000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe1f6000-0x1fe236000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe1b6000-0x1fe1f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe176000-0x1fe1b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe136000-0x1fe176000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe0f6000-0x1fe136000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe0b6000-0x1fe0f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe076000-0x1fe0b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe036000-0x1fe076000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdff6000-0x1fe036000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdfb6000-0x1fdff6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdf76000-0x1fdfb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdf36000-0x1fdf76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdef6000-0x1fdf36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdeb6000-0x1fdef6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fde76000-0x1fdeb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fde36000-0x1fde76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fddf6000-0x1fde36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fddb6000-0x1fddf6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdd76000-0x1fddb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdd36000-0x1fdd76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdcf6000-0x1fdd36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdcb6000-0x1fdcf6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdc76000-0x1fdcb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdc36000-0x1fdc76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdbf6000-0x1fdc36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdbb6000-0x1fdbf6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdb76000-0x1fdbb6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdb36000-0x1fdb76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdaf6000-0x1fdb36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdab6000-0x1fdaf6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fda76000-0x1fdab6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fda36000-0x1fda76000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd9f6000-0x1fda36000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd9b6000-0x1fd9f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd976000-0x1fd9b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd936000-0x1fd976000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8f6000-0x1fd936000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8b6000-0x1fd8f6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd876000-0x1fd8b6000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd866000-0x1fd876000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd856000-0x1fd866000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd846000-0x1fd856000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd836000-0x1fd846000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd826000-0x1fd836000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd816000-0x1fd826000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd806000-0x1fd816000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7f6000-0x1fd806000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7e6000-0x1fd7f6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7d6000-0x1fd7e6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7c6000-0x1fd7d6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7b6000-0x1fd7c6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7a6000-0x1fd7b6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd796000-0x1fd7a6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd786000-0x1fd796000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd776000-0x1fd786000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd766000-0x1fd776000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd756000-0x1fd766000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd746000-0x1fd756000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd736000-0x1fd746000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd726000-0x1fd736000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd716000-0x1fd726000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd706000-0x1fd716000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6f6000-0x1fd706000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6e6000-0x1fd6f6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6d6000-0x1fd6e6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6c6000-0x1fd6d6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6b6000-0x1fd6c6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6a6000-0x1fd6b6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd696000-0x1fd6a6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd686000-0x1fd696000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd676000-0x1fd686000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd666000-0x1fd676000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd656000-0x1fd666000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd646000-0x1fd656000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd636000-0x1fd646000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd626000-0x1fd636000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd616000-0x1fd626000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd606000-0x1fd616000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5f6000-0x1fd606000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5e6000-0x1fd5f6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5d6000-0x1fd5e6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5c6000-0x1fd5d6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5b6000-0x1fd5c6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5a6000-0x1fd5b6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd596000-0x1fd5a6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd586000-0x1fd596000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd576000-0x1fd586000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd566000-0x1fd576000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd556000-0x1fd566000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd546000-0x1fd556000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd536000-0x1fd546000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd526000-0x1fd536000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd516000-0x1fd526000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd506000-0x1fd516000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4f6000-0x1fd506000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4e6000-0x1fd4f6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4d6000-0x1fd4e6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4c6000-0x1fd4d6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4b6000-0x1fd4c6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4a6000-0x1fd4b6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd496000-0x1fd4a6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd486000-0x1fd496000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd476000-0x1fd486000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd466000-0x1fd476000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd456000-0x1fd466000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd446000-0x1fd456000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd436000-0x1fd446000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd426000-0x1fd436000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd416000-0x1fd426000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd406000-0x1fd416000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3f6000-0x1fd406000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3e6000-0x1fd3f6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3d6000-0x1fd3e6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3c6000-0x1fd3d6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3b6000-0x1fd3c6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3a6000-0x1fd3b6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd396000-0x1fd3a6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd386000-0x1fd396000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd376000-0x1fd386000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd366000-0x1fd376000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd356000-0x1fd366000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd346000-0x1fd356000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd336000-0x1fd346000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd326000-0x1fd336000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd316000-0x1fd326000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd306000-0x1fd316000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2f6000-0x1fd306000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2e6000-0x1fd2f6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2d6000-0x1fd2e6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2c6000-0x1fd2d6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2b6000-0x1fd2c6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2a6000-0x1fd2b6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd296000-0x1fd2a6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd286000-0x1fd296000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd276000-0x1fd286000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd266000-0x1fd276000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd256000-0x1fd266000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd246000-0x1fd256000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd236000-0x1fd246000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd226000-0x1fd236000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd216000-0x1fd226000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd206000-0x1fd216000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1f6000-0x1fd206000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1e6000-0x1fd1f6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1d6000-0x1fd1e6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1c6000-0x1fd1d6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1b6000-0x1fd1c6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1a6000-0x1fd1b6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd196000-0x1fd1a6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd186000-0x1fd196000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd176000-0x1fd186000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd166000-0x1fd176000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd156000-0x1fd166000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd146000-0x1fd156000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd136000-0x1fd146000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd126000-0x1fd136000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd116000-0x1fd126000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd106000-0x1fd116000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd0f6000-0x1fd106000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd0e6000-0x1fd0f6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd0d6000-0x1fd0e6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd0c6000-0x1fd0d6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd0b6000-0x1fd0c6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd0a6000-0x1fd0b6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd096000-0x1fd0a6000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd086000-0x1fd096000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd076000-0x1fd086000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd01c000-0x1fd06d000 [REG:R-X] (code) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd06d000-0x1fd070000 [REG:RW-] (data) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd070000-0x1fd076000 [REG:RW-] (bss) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x10000-0x1fd01c000 [REG:RWX] (free)
(host_main.c:526:initialize_enclave) debug: Added all pages to SGX enclave
(host_framework.c:449:init_enclave) debug: Enclave initializing:
(host_framework.c:450:init_enclave) debug:     enclave id:   0x00000001fffff000
(host_framework.c:451:init_enclave) debug:     mr_enclave:   3fc847d654e580f623385376a76925eea2a38a1aa62702b2263d8a366ab1e3af
(host_framework.c:454:init_enclave) debug:     isv_prod_id:  0
(host_framework.c:455:init_enclave) debug:     isv_svn:      0
(pal_main.c:415:print_warning_on_invariant_tsc) warning: Could not set up Invariant TSC (CPU is too old or you run on a VM that does not expose corresponding CPUID leaves). This degrades performance.
(libos_init.c:387:libos_init) debug: Gramine was built from commit: ff71d7afea730dffd56a97af39bb6a73ee6c7662
(libos_init.c:389:libos_init) debug: Host: Linux-SGX
(libos_context.c:70:libos_xstate_init) debug: LibOS xsave_enabled 1, xsave_size 0xa80(2688), xsave_features 0xe7
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfdb000-0x1fd01c000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfda000-0x1fcfdb000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfd9000-0x1fcfda000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfd8000-0x1fcfd9000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfd7000-0x1fcfd8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfd5000-0x1fcfd7000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfd4000-0x1fcfd5000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfd3000-0x1fcfd4000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfd2000-0x1fcfd3000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfd0000-0x1fcfd2000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfcf000-0x1fcfd0000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfcc000-0x1fcfcf000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfca000-0x1fcfcc000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfc7000-0x1fcfca000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfc6000-0x1fcfc7000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfc1000-0x1fcfc6000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfbe000-0x1fcfc1000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfb9000-0x1fcfbe000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfb7000-0x1fcfb9000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfae000-0x1fcfb7000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfa8000-0x1fcfae000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf9f000-0x1fcfa8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf95000-0x1fcf99000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf84000-0x1fcf95000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf82000-0x1fcf84000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf75000-0x1fcf80000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf64000-0x1fcf75000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf61000-0x1fcf64000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf58000-0x1fcf5f000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf31000-0x1fcf52000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf06000-0x1fcf1b000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcee5000-0x1fcf06000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fced8000-0x1fcee5000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fce90000-0x1fced1000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fce67000-0x1fce90000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fce26000-0x1fce67000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcdd5000-0x1fce26000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcd29000-0x1fcdaa000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcc79000-0x1fccfa000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcbd8000-0x1fcc79000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcad7000-0x1fcbd8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fca54000-0x1fcad7000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc91c000-0x1fca1d000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc75c000-0x1fc89d000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc55b000-0x1fc75c000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc35a000-0x1fc55b000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc191000-0x1fc259000 (PAL internal me) bookkeeped
(libos_vma.c:694:init_vma) debug: ASLR top address adjusted to 0x1d7967000
(libos_fs_encrypted.c:454:get_or_create_encrypted_files_key) debug: Successfully retrieved special key "_sgx_mrenclave"
(libos_fs_encrypted.c:454:get_or_create_encrypted_files_key) debug: Successfully retrieved special key "_sgx_mrsigner"
(attestation.c:366:init_sgx_attestation) debug: host is Linux-SGX and remote attestation type is 'none', skipping /dev/attestation/quote file
(warn.c:115:print_warnings_on_insecure_configs) -----------------------------------------------------------------------------------------------------------------------
(warn.c:117:print_warnings_on_insecure_configs) Gramine detected the following insecure configurations:

(warn.c:124:print_warnings_on_insecure_configs)   - loader.log_level = warning|debug|trace|all (verbose log level, may leak information)
(warn.c:164:print_warnings_on_insecure_configs)
Gramine will continue application execution, but this configuration must not be used in production!
(warn.c:166:print_warnings_on_insecure_configs) -----------------------------------------------------------------------------------------------------------------------

(libos_init.c:420:libos_init) debug: LibOS loaded at 0x1fc191000, ready to initialize
(libos_init.c:583:create_pipe) debug: Creating pipe: pipe.srv:2048243393662151445/8e070e51d499fc8fa9c87a58b9b1e6e8407d674483211080de84fed05705ab8a
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "file:/" (chroot) under /
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "proc" (pseudo) under /proc
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "dev" (pseudo) under /dev
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "sys" (pseudo) under /sys
(libos_init.c:583:create_pipe) [P1:T1:bun] debug: Creating pipe: pipe.srv:2048243393662151445/5784df1b7379002743de23d8cccf21a944b43eee4b2ec53096fa5368c04ffa0b
(libos_init.c:583:create_pipe) [P1:T1:bun] debug: Creating pipe: pipe.srv:2048243393662151445/1b0735d9f4625ee08bafdb7b54bbf03640937eb665f604e29e33f47f4aedf6dd
(libos_async.c:126:libos_async_worker) [P1:libos] debug: Async worker thread started
(libos_init.c:308:init_stack) [P1:T1:bun] debug: Allocated stack at 0x1d7767000 (size = 0x200000)
(libos_rtld.c:853:load_elf_object) [P1:T1:bun] debug: loading "file://gramine/app_files/bun"
(libos_rtld.c:907:find_interp) [P1:T1:bun] debug: searching for interpreter: /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/ld-linux-x86-64.so.2
(libos_rtld.c:853:load_elf_object) [P1:T1:bun] debug: loading "file://gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/ld-linux-x86-64.so.2"
(libos_init.c:583:create_pipe) [P1:T1:bun] debug: Creating pipe: pipe.srv:2048243393662151445/1
(libos_init.c:583:create_pipe) [P1:T1:bun] debug: Creating pipe: pipe.srv:2048243393662151445/f3b2997f018973d0ca244c7b6a0ed016beec9f1c70342b9b8852918b17ac4635
(libos_ipc_worker.c:372:ipc_worker_wrapper) [P1:libos] debug: IPC worker started
(libos_init.c:528:libos_init) [P1:T1:bun] debug: LibOS initialized
(libos_rtld.c:1053:register_library) [P1:T1:bun] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libc.so.6 loaded at 0x1d7558000
(libos_rtld.c:1053:register_library) [P1:T1:bun] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libpthread.so.0 loaded at 0x1d7553000
(libos_rtld.c:1053:register_library) [P1:T1:bun] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libdl.so.2 loaded at 0x1d754e000
(libos_rtld.c:1053:register_library) [P1:T1:bun] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libm.so.6 loaded at 0x1d7470000
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:bun] warning: Unsupported system call rseq
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:bun] warning: Unsupported system call prctl
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:bun] warning: Unsupported system call prctl
(pal_exception.c:232:handle_ud) Emulating a raw syscall instruction. This degrades performance, consider patching your application to use Gramine syscall API.
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:bun] warning: Unsupported system call clone3
(libos_init.c:583:create_pipe) [P1:T1:bun] debug: Creating pipe: pipe.srv:2048243393662151445/ad7b7a2c258d04ebabf0dd8fb073301c0b8ed4ac7c0da3de038fdd88b4257621
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_exit.c:215:libos_syscall_exit) [P1:T2:bun] debug: ---- exit (returning 0)
(libos_async.c:109:install_async_event) [P1:T2:bun] debug: Installed async event at 1764208712111255
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_init.c:583:create_pipe) [P1:T1:bun] debug: Creating pipe: pipe.srv:2048243393662151445/a490378ae0ffe2186f21d52a0637c64d5046709fe60f66b952ed04f604a97389
(libos_futex.c:755:_libos_syscall_futex) [P1:T3:bun] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:bun] warning: Unsupported system call timerfd_create
(libos_epoll.c:368:do_epoll_add) [P1:T1:bun] debug: epoll: added 5 (0x1fcf28440) to epoll handle 0x1fcf28678
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:bun] warning: Unsupported system call timerfd_create
============================================================
Bun v1.3.3 (274e01c7) Linux x64 (baseline)
Linux Kernel v3.10.0 | glibc v2.40
CPU: sse42 popcnt avx avx2 avx512
Args: "/gramine/app_files/bun" "hello-world.js"
Features: jsc
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:bun] warning: Unsupported system call getrusage
Elapsed: 12538ms | User: 1764209193630ms | Sys: 0ms
RSS: 33.56MB | Peak: 0B  | Commit: 33.56MB | Faults: 131072

panic(main thread): us_create_timer: returned null: 38
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:bun] warning: Unsupported system call process_vm_readv
(libos_rtld.c:1053:register_library) [P1:T1:bun] debug: glibc register library /usr/lib/x86_64-linux-gnu/libgcc_s.so.1 loaded at 0x1d71f0000
oh no: Bun has crashed. This indicates a bug in Bun, not your code.

To send a redacted crash report to Bun's team,
please file a GitHub issue using the link below:

 https://bun.report/1.3.3/Ba1274e01cAggggBwrn6hDm76/3Ck3k26C4vll7Cur3l7Cut0l7Ckv9s7Cy1341Cgzt41CA0eNorLY5PLkpNLEmNL8nMTS2yUihKLSktyktNUcgrzcmxUjC2AADriAyf

(pal_exception.c:260:handle_ud) warning: Unknown or illegal instruction executed at 0x2febfe4
(libos_signal.c:480:illegal_upcall) [P1:T1:bun] debug: Illegal instruction during app execution at 0x2febfe4; delivering to app
(libos_signal.c:58:sighandler_kill) [P1:T1:bun] debug: killed by signal 4
(libos_fs_lock.c:785:file_lock_clear_pid) [P1:T1:bun] debug: clearing file (POSIX) locks for pid 1
(libos_async.c:109:install_async_event) [P1:T3:bun] debug: Installed async event at 1764208713486011
(libos_sync_client.c:331:shutdown_sync_client) [P1:T1:bun] debug: sync client shutdown: closing handles
(libos_sync_client.c:346:shutdown_sync_client) [P1:T1:bun] debug: sync client shutdown: waiting for confirmation
(libos_sync_client.c:359:shutdown_sync_client) [P1:T1:bun] debug: sync client shutdown: finished
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_async.c:293:libos_async_worker) [P1:libos] debug: Async worker thread terminated
(libos_ipc_worker.c:285:ipc_worker_main) [P1:libos] debug: IPC worker: exiting worker thread
(libos_exit.c:51:libos_clean_and_exit) [P1:T1:bun] debug: process 1 exited with status 132
(pal_process.c:248:_PalProcessExit) debug: PalProcessExit: Returning exit code 132
```
