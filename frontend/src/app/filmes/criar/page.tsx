import FilmeForm from "@/componentes/FilmeForm/FilmeForm";
import { createFilmes } from "@/services/filme.services";
import { CreateFilmeDTO } from "@/tipos/filme";

export default function CriarFilmePage() {
  async function handleCreate(dados: CreateFilmeDTO) {
    "use server";
    await createFilmes(dados);
  }

  return <FilmeForm titulo="Adicionar Filme" onSubmit={handleCreate} />;
}
