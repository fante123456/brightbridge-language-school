// Packs the static export (./out) into release/brightbridge-language-school-o2switch.zip
// Usage: npm run build && npm run zip
// Uses the tar tool built into Windows 10/11 (and macOS/Linux bsdtar) to write a .zip.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";

const out = resolve("out");
if (!existsSync(out)) {
  console.error("No ./out folder. Run `npm run build` first.");
  process.exit(1);
}
mkdirSync("release", { recursive: true });
const zip = resolve("release", "brightbridge-language-school-o2switch.zip");
rmSync(zip, { force: true });

// On Windows, call the built-in bsdtar directly (Git Bash's GNU tar cannot write zips).
const tar =
  process.platform === "win32" ? join(process.env.SystemRoot ?? "C:\\Windows", "System32", "tar.exe") : "tar";

// List entries explicitly so the hidden .htaccess file is included.
const entries = readdirSync(out);
execFileSync(tar, ["-a", "-c", "-f", zip, ...entries], { cwd: out, stdio: "inherit" });
console.log(`Created ${zip}`);
