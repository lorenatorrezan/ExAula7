import { adicionar, concluir, remover, listar } from "./tarefas.js";

async function main() {
  await adicionar("estudar fs");
  await adicionar("fazer exercício 2");
  await concluir(1);
  await remover(2);
  console.log(await listar());
}

main();