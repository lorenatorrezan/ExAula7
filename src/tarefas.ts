import { readFile, writeFile } from "node:fs/promises";

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

const ARQUIVO = "tarefas.json";

async function carregar(): Promise<Tarefa[]> {
  const conteudo = await readFile(ARQUIVO, "utf-8");
  return JSON.parse(conteudo);
}

async function salvar(tarefas: Tarefa[]): Promise<void> {
  await writeFile(ARQUIVO, JSON.stringify(tarefas, null, 2), "utf-8");
}

export async function adicionar(titulo: string): Promise<void> {
  const tarefas = await carregar();
  const id = tarefas.length > 0 ? Math.max(...tarefas.map((t) => t.id)) + 1 : 1;
  tarefas.push({ id, titulo, concluida: false });
  await salvar(tarefas);
}

export async function concluir(id: number): Promise<void> {
  const tarefas = await carregar();
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) throw new Error(`Tarefa ${id} não encontrada`);
  tarefa.concluida = true;
  await salvar(tarefas);
}

export async function remover(id: number): Promise<void> {
  const tarefas = await carregar();
  const restantes = tarefas.filter((t) => t.id !== id);
  if (restantes.length === tarefas.length) {
    throw new Error(`Tarefa ${id} não encontrada`);
  }
  await salvar(restantes);
}

export async function listar(): Promise<Tarefa[]> {
  return carregar();
}