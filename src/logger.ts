import { appendFile, readFile } from "node:fs/promises";

const ARQUIVO = "app.log";

export async function log(mensagem: string): Promise<void> {
  const linha = `${new Date().toISOString()} ${mensagem}\n`;
  await appendFile(ARQUIVO, linha, "utf-8");
}

export async function lerLogs(): Promise<string[]> {
  const conteudo = await readFile(ARQUIVO, "utf-8");
  return conteudo.split("\n").filter((linha) => linha.length > 0);
}