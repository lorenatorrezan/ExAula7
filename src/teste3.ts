import { buscarComSeguranca } from "./buscarComSeguranca.js";

async function main() {
  console.log(await buscarComSeguranca("tarefas.json"));
  console.log(await buscarComSeguranca("naoexiste.txt"));
}

main();