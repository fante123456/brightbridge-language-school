// Post-build fix for the static export (runs automatically after `npm run build`).
// Next 16 writes prefetch payloads as  out/<route>/__next.<segment>/<more>/__PAGE__.txt
// but the client requests           out/<route>/__next.<segment>.<more>.__PAGE__.txt
// (route groups such as (fr) add one more folder level). On static hosting
// that request 404s and logs a console error. Copying each file to the
// requested flat name fixes it. Nothing is deleted.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
if (!existsSync(OUT)) process.exit(0);

let copied = 0;

/** Copy every .txt file under `dir` (any depth) to `<parent>/<prefix>.<path.joined.by.dots>`. */
function flatten(parent, dir, prefix) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      flatten(parent, full, `${prefix}.${name}`);
    } else if (name.endsWith(".txt")) {
      const target = join(parent, `${prefix}.${name}`);
      if (!existsSync(target)) {
        copyFileSync(full, target);
        copied++;
      }
    }
  }
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory() || name === "_next") continue;
    if (name.startsWith("__next.")) flatten(dir, full, name);
    walk(full);
  }
}

walk(OUT);
console.log(`fix-export-prefetch: ${copied} prefetch file(s) aliased`);
