import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SKIP_DIRS = new Set(["node_modules", ".next", "dist"]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      walk(p, out);
    } else if (/\.(tsx?)$/.test(ent.name)) {
      out.push(p);
    }
  }
  return out;
}

function toAlias(fromFile, spec) {
  if (!spec.startsWith(".")) return null;
  const dir = path.dirname(fromFile);
  const resolved = path.resolve(dir, spec);
  const rel = path.relative(root, resolved);
  if (rel.startsWith("..")) return null;
  const posix = rel.split(path.sep).join("/");
  return `@/${posix}`;
}

function rewriteFile(filePath) {
  let s = fs.readFileSync(filePath, "utf8");
  const next = s.replace(/from\s+["'](\.[^"']+)["']/g, (full, spec) => {
    const alias = toAlias(filePath, spec);
    return alias ? `from "${alias}"` : full;
  });
  if (next !== s) {
    fs.writeFileSync(filePath, next, "utf8");
    return true;
  }
  return false;
}

const files = walk(root);
let n = 0;
for (const f of files) {
  if (rewriteFile(f)) n++;
}
console.log(`Updated ${n} files under ${root}`);
