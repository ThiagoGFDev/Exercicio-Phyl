"use client";

import Link from "next/link";
import { Filme } from "@/tipos/filme";
import { deleteFilme } from "@/services/filme.services";
import { useRouter } from "next/navigation";
import "./FilmeCard.css";

interface FilmeCardProps {
  filme: Filme;
}

export default function FilmeCard({ filme }: FilmeCardProps) {
  const router = useRouter();

  async function handleDelete() {
    if (confirm(`Deseja excluir "${filme.titulo}"?`)) {
      await deleteFilme(filme.id);
      router.refresh();
    }
  }

  return (
    <div className="card">
      <img src={filme.imagem} alt={filme.titulo} />
      <h2>{filme.titulo}</h2>
      <p>⭐ {filme.nota}/10</p>
      <div className="btn-acoes">
        <Link href={`/filmes/${filme.id}/editar`}>Editar</Link>
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </div>
  );
}
