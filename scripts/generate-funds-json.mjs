import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

async function main() {
  const sourcePath = path.resolve("src/data/funds.js");
  const destDir = path.resolve("public/data");
  const destPath = path.resolve(destDir, "funds.json");

  const sourceUrl = pathToFileURL(sourcePath).href;
  const data = await import(sourceUrl);

  const json = {
    META: data.META,
    FUNDS: data.FUNDS,
  };

  await fs.mkdir(destDir, { recursive: true });
  await fs.writeFile(destPath, JSON.stringify(json, null, 2) + "\n", "utf8");
  console.log(`Generated ${path.relative(process.cwd(), destPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
