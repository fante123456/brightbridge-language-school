// Post-build fix for the static export (runs automatically after `npm run build`).
// Next 16 writes prefetch payloads as  out/<route>/__next.<segment>/__PAGE__.txt
// but the client requests           out/<route>/__next.<segment>.__PAGE__.txt
// On static hosting (Apache/o2switch) that request 404s and logs a console
// error. Copying each file to the requested name fixes it. Nothing is deleted.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
if (!existsSync(OUT)) process.exit(0);

let copied = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory() || name === "_next") continue;
    if (name.startsWith("__next.")) {
      for (const file of readdirSync(full)) {
        const target = join(dir, `${name}.${file}`);
        if (file.endsWith(".txt") && !existsSync(target)) {
          copyFileSync(join(full, file), target);
          copied++;
        }
      }
    }
    walk(full);
  }
}
walk(OUT);
console.log(`fix-export-prefetch: ${copied} prefetch file(s) aliased`);
