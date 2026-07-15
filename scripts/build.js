/*
  Dependency-free production build script.
  It validates required source files and copies the static site to dist/.
*/

import { cpSync, existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");
const checkOnly = process.argv.includes("--check-only");

const requiredPaths = [
  "index.html",
  "assets/css/styles.css",
  "assets/js/data.js",
  "assets/js/components.js",
  "assets/js/main.js",
  "assets/docs/cv.pdf",
  "README.md"
];

const missing = requiredPaths.filter((relativePath) => !existsSync(join(root, relativePath)));

if (missing.length) {
  console.error("Missing required files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

for (const relativePath of requiredPaths) {
  const stats = statSync(join(root, relativePath));
  if (!stats.isFile()) {
    console.error(`Expected file but found non-file path: ${relativePath}`);
    process.exit(1);
  }
}

if (!checkOnly) {
  const dist = join(root, "dist");
  rmSync(dist, { recursive: true, force: true });
  mkdirSync(dist, { recursive: true });
  for (const item of ["index.html", "assets", ".nojekyll"]) {
    cpSync(join(root, item), join(dist, item), { recursive: true });
  }
}

console.log(checkOnly ? "Check passed." : "Build completed: dist/ is ready for deployment.");
