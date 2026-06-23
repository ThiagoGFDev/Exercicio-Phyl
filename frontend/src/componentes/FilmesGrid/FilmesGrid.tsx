import { Filme } from "@/tipos/filme";
import FilmeCard from "@/componentes/FilmeCard/FilmeCard";
import "./FilmeGrid.css";

interface FilmesGridProps {
  filmes: Filme[];
}

export default function FilmesGrid({ filmes }: FilmesGridProps) {
  return (
    <div className="grid">
      {filmes.map((filme) => (
        <FilmeCard key={filme.id} filme={filme} />
      ))}
    </div>
  );
}
