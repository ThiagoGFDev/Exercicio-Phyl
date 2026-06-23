import { Filme, CreateFilmeDTO, UpdateFilmeDTO } from "@/tipos/filme";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getFilmes(): Promise<Filme[]> {
  const res = await fetch(`${API_URL}/filmes`, { cache: "no-store" });
  return res.json();
}

export async function getFilme(id: string): Promise<Filme> {
  const res = await fetch(`${API_URL}/filmes/${id}`, { cache: "no-store" });
  return res.json();
}

export async function createFilmes(filme: CreateFilmeDTO): Promise<void> {
  await fetch(`${API_URL}/filmes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(filme),
  });
}

export async function updateFilme(id: number, filme: UpdateFilmeDTO): Promise<void> {
  await fetch(`${API_URL}/filmes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(filme),
  });
}

export async function deleteFilme(id: number): Promise<void> {
  await fetch(`${API_URL}/filmes/${id}`, {
    method: "DELETE",
  });
}
