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
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ffe82000-0x200000000 [REG:R--] (manifest) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ffa82000-0x1ffe82000 [REG:RW-] (ssa) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ffa02000-0x1ffa82000 [TCS:---] (tcs) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff982000-0x1ffa02000 [REG:RW-] (tls) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff942000-0x1ff982000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff902000-0x1ff942000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff8c2000-0x1ff902000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff882000-0x1ff8c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff842000-0x1ff882000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff802000-0x1ff842000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff7c2000-0x1ff802000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff782000-0x1ff7c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff742000-0x1ff782000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff702000-0x1ff742000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff6c2000-0x1ff702000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff682000-0x1ff6c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff642000-0x1ff682000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff602000-0x1ff642000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff5c2000-0x1ff602000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff582000-0x1ff5c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff542000-0x1ff582000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff502000-0x1ff542000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff4c2000-0x1ff502000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff482000-0x1ff4c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff442000-0x1ff482000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff402000-0x1ff442000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff3c2000-0x1ff402000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff382000-0x1ff3c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff342000-0x1ff382000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff302000-0x1ff342000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff2c2000-0x1ff302000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff282000-0x1ff2c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff242000-0x1ff282000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff202000-0x1ff242000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff1c2000-0x1ff202000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff182000-0x1ff1c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff142000-0x1ff182000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff102000-0x1ff142000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff0c2000-0x1ff102000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff082000-0x1ff0c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff042000-0x1ff082000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1ff002000-0x1ff042000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fefc2000-0x1ff002000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fef82000-0x1fefc2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fef42000-0x1fef82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fef02000-0x1fef42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feec2000-0x1fef02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fee82000-0x1feec2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fee42000-0x1fee82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fee02000-0x1fee42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fedc2000-0x1fee02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fed82000-0x1fedc2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fed42000-0x1fed82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fed02000-0x1fed42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fecc2000-0x1fed02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fec82000-0x1fecc2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fec42000-0x1fec82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fec02000-0x1fec42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1febc2000-0x1fec02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feb82000-0x1febc2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feb42000-0x1feb82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feb02000-0x1feb42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1feac2000-0x1feb02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fea82000-0x1feac2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fea42000-0x1fea82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fea02000-0x1fea42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe9c2000-0x1fea02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe982000-0x1fe9c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe942000-0x1fe982000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe902000-0x1fe942000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe8c2000-0x1fe902000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe882000-0x1fe8c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe842000-0x1fe882000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe802000-0x1fe842000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe7c2000-0x1fe802000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe782000-0x1fe7c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe742000-0x1fe782000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe702000-0x1fe742000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe6c2000-0x1fe702000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe682000-0x1fe6c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe642000-0x1fe682000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe602000-0x1fe642000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe5c2000-0x1fe602000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe582000-0x1fe5c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe542000-0x1fe582000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe502000-0x1fe542000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe4c2000-0x1fe502000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe482000-0x1fe4c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe442000-0x1fe482000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe402000-0x1fe442000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe3c2000-0x1fe402000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe382000-0x1fe3c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe342000-0x1fe382000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe302000-0x1fe342000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe2c2000-0x1fe302000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe282000-0x1fe2c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe242000-0x1fe282000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe202000-0x1fe242000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe1c2000-0x1fe202000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe182000-0x1fe1c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe142000-0x1fe182000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe102000-0x1fe142000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe0c2000-0x1fe102000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe082000-0x1fe0c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe042000-0x1fe082000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fe002000-0x1fe042000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdfc2000-0x1fe002000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdf82000-0x1fdfc2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdf42000-0x1fdf82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdf02000-0x1fdf42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdec2000-0x1fdf02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fde82000-0x1fdec2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fde42000-0x1fde82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fde02000-0x1fde42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fddc2000-0x1fde02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdd82000-0x1fddc2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdd42000-0x1fdd82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdd02000-0x1fdd42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdcc2000-0x1fdd02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdc82000-0x1fdcc2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdc42000-0x1fdc82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdc02000-0x1fdc42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdbc2000-0x1fdc02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdb82000-0x1fdbc2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdb42000-0x1fdb82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdb02000-0x1fdb42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fdac2000-0x1fdb02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fda82000-0x1fdac2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fda42000-0x1fda82000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fda02000-0x1fda42000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd9c2000-0x1fda02000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd982000-0x1fd9c2000 [REG:RW-] (stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd972000-0x1fd982000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd962000-0x1fd972000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd952000-0x1fd962000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd942000-0x1fd952000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd932000-0x1fd942000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd922000-0x1fd932000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd912000-0x1fd922000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd902000-0x1fd912000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8f2000-0x1fd902000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8e2000-0x1fd8f2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8d2000-0x1fd8e2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8c2000-0x1fd8d2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8b2000-0x1fd8c2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd8a2000-0x1fd8b2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd892000-0x1fd8a2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd882000-0x1fd892000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd872000-0x1fd882000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd862000-0x1fd872000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd852000-0x1fd862000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd842000-0x1fd852000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd832000-0x1fd842000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd822000-0x1fd832000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd812000-0x1fd822000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd802000-0x1fd812000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7f2000-0x1fd802000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7e2000-0x1fd7f2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7d2000-0x1fd7e2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7c2000-0x1fd7d2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7b2000-0x1fd7c2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd7a2000-0x1fd7b2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd792000-0x1fd7a2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd782000-0x1fd792000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd772000-0x1fd782000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd762000-0x1fd772000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd752000-0x1fd762000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd742000-0x1fd752000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd732000-0x1fd742000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd722000-0x1fd732000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd712000-0x1fd722000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd702000-0x1fd712000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6f2000-0x1fd702000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6e2000-0x1fd6f2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6d2000-0x1fd6e2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6c2000-0x1fd6d2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6b2000-0x1fd6c2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd6a2000-0x1fd6b2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd692000-0x1fd6a2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd682000-0x1fd692000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd672000-0x1fd682000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd662000-0x1fd672000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd652000-0x1fd662000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd642000-0x1fd652000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd632000-0x1fd642000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd622000-0x1fd632000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd612000-0x1fd622000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd602000-0x1fd612000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5f2000-0x1fd602000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5e2000-0x1fd5f2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5d2000-0x1fd5e2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5c2000-0x1fd5d2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5b2000-0x1fd5c2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd5a2000-0x1fd5b2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd592000-0x1fd5a2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd582000-0x1fd592000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd572000-0x1fd582000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd562000-0x1fd572000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd552000-0x1fd562000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd542000-0x1fd552000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd532000-0x1fd542000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd522000-0x1fd532000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd512000-0x1fd522000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd502000-0x1fd512000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4f2000-0x1fd502000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4e2000-0x1fd4f2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4d2000-0x1fd4e2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4c2000-0x1fd4d2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4b2000-0x1fd4c2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd4a2000-0x1fd4b2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd492000-0x1fd4a2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd482000-0x1fd492000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd472000-0x1fd482000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd462000-0x1fd472000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd452000-0x1fd462000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd442000-0x1fd452000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd432000-0x1fd442000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd422000-0x1fd432000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd412000-0x1fd422000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd402000-0x1fd412000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3f2000-0x1fd402000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3e2000-0x1fd3f2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3d2000-0x1fd3e2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3c2000-0x1fd3d2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3b2000-0x1fd3c2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd3a2000-0x1fd3b2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd392000-0x1fd3a2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd382000-0x1fd392000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd372000-0x1fd382000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd362000-0x1fd372000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd352000-0x1fd362000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd342000-0x1fd352000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd332000-0x1fd342000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd322000-0x1fd332000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd312000-0x1fd322000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd302000-0x1fd312000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2f2000-0x1fd302000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2e2000-0x1fd2f2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2d2000-0x1fd2e2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2c2000-0x1fd2d2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2b2000-0x1fd2c2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd2a2000-0x1fd2b2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd292000-0x1fd2a2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd282000-0x1fd292000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd272000-0x1fd282000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd262000-0x1fd272000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd252000-0x1fd262000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd242000-0x1fd252000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd232000-0x1fd242000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd222000-0x1fd232000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd212000-0x1fd222000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd202000-0x1fd212000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1f2000-0x1fd202000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1e2000-0x1fd1f2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1d2000-0x1fd1e2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1c2000-0x1fd1d2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1b2000-0x1fd1c2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd1a2000-0x1fd1b2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd192000-0x1fd1a2000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd182000-0x1fd192000 [REG:RW-] (sig_stack) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd12a000-0x1fd179000 [REG:R-X] (code) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd179000-0x1fd17c000 [REG:RW-] (data) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x1fd17c000-0x1fd182000 [REG:RW-] (bss) measured
(host_framework.c:252:add_pages_to_enclave) debug: Adding pages to enclave: 0x10000-0x1fd12a000 [REG:RWX] (free)
(host_main.c:526:initialize_enclave) debug: Added all pages to SGX enclave
(host_framework.c:449:init_enclave) debug: Enclave initializing:
(host_framework.c:450:init_enclave) debug:     enclave id:   0x00000001fffff000
(host_framework.c:451:init_enclave) debug:     mr_enclave:   27f1e6ac994d6103fa104bf690016fa76570538aad2489da2b69298da9a9ca47
(host_framework.c:454:init_enclave) debug:     isv_prod_id:  0
(host_framework.c:455:init_enclave) debug:     isv_svn:      0
(pal_main.c:415:print_warning_on_invariant_tsc) warning: Could not set up Invariant TSC (CPU is too old or you run on a VM that does not expose corresponding CPUID leaves). This degrades performance.
(libos_init.c:387:libos_init) debug: Gramine was built from commit: ff71d7afea730dffd56a97af39bb6a73ee6c7662
(libos_init.c:389:libos_init) debug: Host: Linux-SGX
(libos_context.c:70:libos_xstate_init) debug: LibOS xsave_enabled 1, xsave_size 0xa80(2688), xsave_features 0xe7
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e9000-0x1fd12a000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e8000-0x1fd0e9000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e7000-0x1fd0e8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e6000-0x1fd0e7000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e5000-0x1fd0e6000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e3000-0x1fd0e5000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e2000-0x1fd0e3000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e1000-0x1fd0e2000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0e0000-0x1fd0e1000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0dd000-0x1fd0e0000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0db000-0x1fd0dd000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0da000-0x1fd0db000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0d8000-0x1fd0da000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0d5000-0x1fd0d8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0d4000-0x1fd0d5000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0cf000-0x1fd0d4000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0cc000-0x1fd0cf000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0c7000-0x1fd0cc000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0c5000-0x1fd0c7000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0bc000-0x1fd0c5000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0b6000-0x1fd0bc000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0ad000-0x1fd0b6000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd0a3000-0x1fd0a7000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd092000-0x1fd0a3000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd090000-0x1fd092000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd083000-0x1fd08e000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd072000-0x1fd083000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd06f000-0x1fd072000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd066000-0x1fd06d000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd03f000-0x1fd060000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fd014000-0x1fd029000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcff3000-0x1fd014000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcfe6000-0x1fcff3000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf9e000-0x1fcfdf000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf75000-0x1fcf9e000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcf34000-0x1fcf75000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcece000-0x1fcf1f000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fce37000-0x1fceb8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcdea000-0x1fce37000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcd57000-0x1fcdd8000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcc72000-0x1fcd13000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fcb71000-0x1fcc72000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fca70000-0x1fcb71000 (PAL internal me) bookkeeped
(libos_vma.c:663:init_vma) debug: Initial VMA region 0x1fc852000-0x1fc91c000 (PAL internal me) bookkeeped
(libos_vma.c:694:init_vma) debug: ASLR top address adjusted to 0x124789000
(libos_fs_encrypted.c:454:get_or_create_encrypted_files_key) debug: Successfully retrieved special key "_sgx_mrenclave"
(libos_fs_encrypted.c:454:get_or_create_encrypted_files_key) debug: Successfully retrieved special key "_sgx_mrsigner"
(attestation.c:366:init_sgx_attestation) debug: host is Linux-SGX and remote attestation type is 'none', skipping /dev/attestation/quote file
(warn.c:115:print_warnings_on_insecure_configs) -----------------------------------------------------------------------------------------------------------------------
(warn.c:117:print_warnings_on_insecure_configs) Gramine detected the following insecure configurations:

(warn.c:124:print_warnings_on_insecure_configs)   - loader.log_level = warning|debug|trace|all (verbose log level, may leak information)
(warn.c:164:print_warnings_on_insecure_configs)
Gramine will continue application execution, but this configuration must not be used in production!
(warn.c:166:print_warnings_on_insecure_configs) -----------------------------------------------------------------------------------------------------------------------

(libos_init.c:420:libos_init) debug: LibOS loaded at 0x1fc852000, ready to initialize
(libos_init.c:583:create_pipe) debug: Creating pipe: pipe.srv:15097473491556165893/5e4031bc2b9f2a0bd8727de24d60492672edcef44bf0a06c7c441c41f605cd04
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "file:/" (chroot) under /
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "proc" (pseudo) under /proc
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "dev" (pseudo) under /dev
(libos_fs.c:552:mount_fs) [P1:T1:] debug: mounting "sys" (pseudo) under /sys
(libos_init.c:583:create_pipe) [P1:T1:deno] debug: Creating pipe: pipe.srv:15097473491556165893/07daaed80726cf0f44b130f5e4c79425b6d0170a6574a1621394471120ebef42
(libos_init.c:583:create_pipe) [P1:T1:deno] debug: Creating pipe: pipe.srv:15097473491556165893/6e50f6c393c347a9d58e6af8d0766137a509bd728222f18c239a27032afe4bd8
(libos_async.c:126:libos_async_worker) [P1:libos] debug: Async worker thread started
(libos_init.c:308:init_stack) [P1:T1:deno] debug: Allocated stack at 0x124589000 (size = 0x200000)
(libos_rtld.c:853:load_elf_object) [P1:T1:deno] debug: loading "file://gramine/app_files/deno"
(libos_rtld.c:907:find_interp) [P1:T1:deno] debug: searching for interpreter: /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/ld-linux-x86-64.so.2
(libos_rtld.c:853:load_elf_object) [P1:T1:deno] debug: loading "file://gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/ld-linux-x86-64.so.2"
(libos_init.c:583:create_pipe) [P1:T1:deno] debug: Creating pipe: pipe.srv:15097473491556165893/1
(libos_init.c:583:create_pipe) [P1:T1:deno] debug: Creating pipe: pipe.srv:15097473491556165893/222fd8656f3a25b36d26fca0f1ad97e26eb3c71ba2489b94c0242e148b06e3ba
(libos_ipc_worker.c:372:ipc_worker_wrapper) [P1:libos] debug: IPC worker started
(libos_init.c:528:libos_init) [P1:T1:deno] debug: LibOS initialized
(libos_rtld.c:1053:register_library) [P1:T1:deno] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libdl.so.2 loaded at 0x11d864000
(libos_rtld.c:1053:register_library) [P1:T1:deno] debug: glibc register library /usr/lib/x86_64-linux-gnu/libgcc_s.so.1 loaded at 0x11d844000
(libos_rtld.c:1053:register_library) [P1:T1:deno] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/librt.so.1 loaded at 0x11d83f000
(libos_rtld.c:1053:register_library) [P1:T1:deno] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libpthread.so.0 loaded at 0x11d83a000
(libos_rtld.c:1053:register_library) [P1:T1:deno] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libm.so.6 loaded at 0x11d75a000
(libos_rtld.c:1053:register_library) [P1:T1:deno] debug: glibc register library /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libc.so.6 loaded at 0x11d581000
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:deno] warning: Unsupported system call rseq
(libos_epoll.c:368:do_epoll_add) [P1:T1:deno] debug: epoll: added 4 (0x1fd0368b0) to epoll handle 0x1fd036678
(libos_epoll.c:368:do_epoll_add) [P1:T1:deno] debug: epoll: added 8 (0x1fd036d20) to epoll handle 0x1fd036678
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T1:deno] warning: Unsupported system call clone3
(libos_init.c:583:create_pipe) [P1:T1:deno] debug: Creating pipe: pipe.srv:15097473491556165893/18698b62d526036d3b50d09a0b0ec5a56047ab38053e040a1f7c8e1cbec1a5a0
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T2:deno] warning: Unsupported system call prctl
(libos_init.c:583:create_pipe) [P1:T1:deno] debug: Creating pipe: pipe.srv:15097473491556165893/c6839441bb9d6ffd7d842ef2e6e235472ce4048a5a9188a2083b904b2605faf4
(libos_parser.c:1671:warn_unsupported_syscall) [P1:T3:deno] warning: Unsupported system call prctl
(libos_futex.c:755:_libos_syscall_futex) [P1:T3:deno] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T2:deno] warning: Ignoring FUTEX_CLOCK_REALTIME flag
(libos_futex.c:755:_libos_syscall_futex) [P1:T3:deno] warning: Ignoring FUTEX_CLOCK_REALTIME flag


#
# Fatal process out of memory: Oilpan: CagedHeap reservation.
#
==== C stack trace ===============================

    /gramine/app_files/deno(+0x2c8c233) [0x120530233]
    /gramine/app_files/deno(+0x2c8b2ab) [0x12052f2ab]
    /gramine/app_files/deno(+0x2c8d338) [0x120531338]
    /gramine/app_files/deno(+0x2ce4abb) [0x120588abb]
    /gramine/app_files/deno(+0x2e77cde) [0x12071bcde]
    /gramine/app_files/deno(+0x3817029) [0x1210bb029]
    /gramine/app_files/deno(+0x382073c) [0x1210c473c]
    /gramine/app_files/deno(+0x38204bf) [0x1210c44bf]
    /gramine/app_files/deno(+0x38170f1) [0x1210bb0f1]
    /gramine/app_files/deno(+0x2cf5ff0) [0x120599ff0]
    (pal_exception.c:260:handle_ud) warning: Unknown or illegal instruction executed at 0x120532131
(libos_signal.c:480:illegal_upcall) [P1:T1:deno] debug: Illegal instruction during app execution at 0x120532131; delivering to app
(libos_signal.c:58:sighandler_kill) [P1:T1:deno] debug: killed by signal 4
/gramine/app_files/deno(+0x4a51436) [0x1222f5436]
    /gramine/app_files/deno(+0x45173f7) [0x121dbb3f7]
    /gramine/app_files/deno(+0x49bae34) [0x12225ee34]
    /gramine/app_files/deno(+0x45aaef1) [0x121e4eef1]
    /gramine/app_files/deno(+0x45a117f) [0x121e4517f]
    /gramine/app_files/deno(+0x6974123) [0x124218123]
    /gramine/app_files/deno(+0x451688b) [0x121dba88b]
    /gramine/app_files/deno(+0x45172a3) [0x121dbb2a3]
    /gramine/app_files/deno(+0x451370a) [0x121db770a]
    /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libc.so.6(+0x2616d) [0x11d5a716d]
    /gramine/meson_build_output/lib/x86_64-linux-gnu/gramine/runtime/glibc/libc.so.6(__libc_start_main+0x80) [0x11d5a7230]
    /gramine/app_files/deno(+0x296d02a) [0x12021102a]
(libos_async.c:109:install_async_event) [P1:T3:deno] debug: Installed async event at 1764207983877535
(libos_async.c:267:libos_async_worker) [P1:libos] debug: Thread exited, cleaning up
(libos_fs_lock.c:785:file_lock_clear_pid) [P1:T1:deno] debug: clearing file (POSIX) locks for pid 1
(libos_sync_client.c:331:shutdown_sync_client) [P1:T1:deno] debug: sync client shutdown: closing handles
(libos_sync_client.c:346:shutdown_sync_client) [P1:T1:deno] debug: sync client shutdown: waiting for confirmation
(libos_sync_client.c:359:shutdown_sync_client) [P1:T1:deno] debug: sync client shutdown: finished
(libos_async.c:109:install_async_event) [P1:T2:deno] debug: Installed async event at 1764207983878033
(libos_async.c:293:libos_async_worker) [P1:libos] debug: Async worker thread terminated
(libos_ipc_worker.c:285:ipc_worker_main) [P1:libos] debug: IPC worker: exiting worker thread
(libos_exit.c:51:libos_clean_and_exit) [P1:T1:deno] debug: process 1 exited with status 132
(pal_process.c:248:_PalProcessExit) debug: PalProcessExit: Returning exit code 132
```
