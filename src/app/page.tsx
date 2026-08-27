import styles from './page.module.css';
import { PROJETOS_MOCK } from '@/data/projectMock';
import Header from '@/components/layout/header'
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.grid}>
        {PROJETOS_MOCK.map((projeto) => (
          <article key={projeto.id} className={styles.card}>
            <div className={styles.badge}>{projeto.categoria}</div>
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
            {projeto.data && <span className={styles.date}>{projeto.data}</span>}
          </article>
        ))}
      </section>
    </main>
  );
}