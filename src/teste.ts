import { log, lerLogs } from "./logger.js";

async function main() {
  await log("primeira mensagem");
  await log("segunda mensagem");
  console.log(await lerLogs());
}

main();
