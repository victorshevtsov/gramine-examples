import * as esbuild from "esbuild";
import { builtinModules } from "module";

async function build() {
  try {
    // Only mark Node.js built-in modules as external
    const external = [
      ...builtinModules,
      ...builtinModules.map(m => `node:${m}`)
    ];

    await esbuild.build({
      entryPoints: ["src/index.js"],
      bundle: true,
      platform: "node",
      target: "node20",
      format: "cjs",
      outfile: "dist/index.cjs",
      external,
      // sourcemap: true,
      sourcemap: false,
      minify: false,
      // minify: true,
      treeShaking: true,
      logLevel: "info",
      banner: {
        js: '#!/usr/bin/env node\n',
      },
    });

    console.log("✅ Build completed successfully!");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

build();
