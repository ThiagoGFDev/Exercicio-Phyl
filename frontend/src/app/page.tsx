import styles from "@/app/page.module.css";
import FilmesGrid from "@/componentes/FilmesGrid/FilmesGrid";
import { getFilmes } from "@/services/filme.services";
import Link from "next/link";

export default async function Home() {
  const filmes = await getFilmes();

  return (
    <main className={styles.home}>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem 2rem" }}>
        <Link
          href="/filmes/criar"
          style={{
            background: "#0a8a01",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          + Adicionar Filme
        </Link>
      </div>
      <FilmesGrid filmes={filmes} />
    </main>
  );
}
