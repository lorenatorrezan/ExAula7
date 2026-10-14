import { promises as fs } from "fs";

export async function buscarComSeguranca(caminho: string): Promise<string | null> {
  try {
    const conteudo = await fs.readFile(caminho, "utf-8");
    return conteudo;
  } catch (erro: any) {
    if (erro.code === "ENOENT") {
      return null; // Arquivo não existe
    }
    throw erro; // Outros erros são lançados
  }
}
