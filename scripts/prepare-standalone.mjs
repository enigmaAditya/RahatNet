import fs from "node:fs/promises";
import path from "node:path";

async function copyDir(src, dest) {
  try {
    await fs.mkdir(dest, { recursive: true });
    await fs.cp(src, dest, { recursive: true, force: true });
    console.log(`✓ Copied ${src} → ${dest}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.warn(`⚠ Source directory ${src} not found, skipping.`);
    } else {
      throw error;
    }
  }
}

async function prepareStandalone() {
  const root = process.cwd();
  const standaloneNext = path.join(root, ".next", "standalone", ".next");
  const standalonePublic = path.join(root, ".next", "standalone", "public");

  const staticSrc = path.join(root, ".next", "static");
  const staticDest = path.join(standaloneNext, "static");
  const publicSrc = path.join(root, "public");

  console.log("Preparing standalone production bundle assets...");

  // 1. Copy .next/static → .next/standalone/.next/static
  await copyDir(staticSrc, staticDest);

  // 2. Copy public → .next/standalone/public
  await copyDir(publicSrc, standalonePublic);

  console.log("✓ Standalone production bundle is ready for execution.");
}

prepareStandalone().catch((err) => {
  console.error("❌ Failed to prepare standalone bundle:", err);
  process.exit(1);
});
