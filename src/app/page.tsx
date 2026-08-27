'use client'

import { useState } from 'react';
import styles from './page.module.css';
import { PROJETOS_MOCK } from '@/data/projectMock';
import Header from '@/components/layout/header';
import { Projeto } from '@/types/project';
import { ProjectModal } from '@/components/ProjectModal/ProjectModal';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.grid}>
        {PROJETOS_MOCK.map((projeto) => (
          <article
            key={projeto.id}
            className={styles.card}
            onClick={() => setSelectedProject(projeto)}
          >
            <div className={styles.badge}>{projeto.categoria}</div>
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
            {projeto.data && <span className={styles.date}>{projeto.data}</span>}
          </article>
        ))}
      </section>
      <ProjectModal
        projeto={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}