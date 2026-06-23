"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateFilmeDTO, Filme } from "@/tipos/filme";
import "./FilmeForm.css";

interface FilmeFormProps {
  filme?: Filme;
  onSubmit: (dados: CreateFilmeDTO) => Promise<void>;
  titulo: string;
}

export default function FilmeForm({ filme, onSubmit, titulo }: FilmeFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<CreateFilmeDTO>({
    titulo: filme?.titulo ?? "",
    imagem: filme?.imagem ?? "",
    nota: filme?.nota ?? 0,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit(form);
    router.push("/");
  }

  return (
    <form className="filme-form" onSubmit={handleSubmit}>
      <h2>{titulo}</h2>

      <div className="form-input">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          value={form.titulo}
          onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          placeholder="Nome do filme"
          required
        />
      </div>

      <div className="form-input">
        <label htmlFor="imagem">URL da Imagem</label>
        <input
          id="imagem"
          type="url"
          value={form.imagem}
          onChange={(e) => setForm({ ...form, imagem: e.target.value })}
          placeholder="https://..."
          required
        />
      </div>

      <div className="form-input">
        <label htmlFor="nota">Nota (0 - 10)</label>
        <input
          id="nota"
          type="number"
          min={0}
          max={10}
          step={0.1}
          value={form.nota}
          onChange={(e) => setForm({ ...form, nota: Number(e.target.value) })}
          required
        />
      </div>

      <button type="submit">{titulo}</button>
    </form>
  );
}
