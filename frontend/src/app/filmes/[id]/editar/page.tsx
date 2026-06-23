import FilmeForm from "@/componentes/FilmeForm/FilmeForm";
import { getFilme, updateFilme } from "@/services/filme.services";
import { CreateFilmeDTO } from "@/tipos/filme";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditarFilmePage({ params }: Props) {
  const { id } = await params;
  const filme = await getFilme(id);

  async function handleUpdate(dados: CreateFilmeDTO) {
    "use server";
    await updateFilme(filme.id, dados);
  }

  return <FilmeForm titulo="Salvar Alterações" onSubmit={handleUpdate} filme={filme} />;
}
