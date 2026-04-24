/**
 * - `node scripts/clean-next.mjs --dev` — remove only `.next/dev` (dev-server cache). Safe to run
 *   before `next dev` when you see dev-only 500s / ENOENT for routes-manifest, without deleting a
 *   production `next build` in `.next`.
 * - `node scripts/clean-next.mjs` (no args) — remove the entire `.next` directory.
 */
import { rm } from "node:fs/promises";
import { join } from "node:path";

const devOnly = process.argv.includes("--dev");
const target = devOnly
  ? join(process.cwd(), ".next", "dev")
  : join(process.cwd(), ".next");
try {
  await rm(target, { recursive: true, force: true });
} catch (e) {
  const err = /** @type {NodeJS.ErrnoException} */ (e);
  if (err.code === "ENOENT") {
    // nothing to remove
  } else {
    console.error(
      devOnly
        ? `[clean-next] Could not remove .next/dev: ${err.message}`
        : `[clean-next] Could not remove .next: ${err.message}`,
    );
    process.exit(1);
  }
}
