'use client';

import { Projeto } from '@/types/project';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  projeto: Projeto | null;
  onClose: () => void;
}

export function ProjectModal({ projeto, onClose }: ProjectModalProps) {
  if (!projeto) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/*Botao de fechar o modal*/}
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        
        {/*badje com o nome da categoria*/}
        <span className={styles.badge}>{projeto.categoria}</span>

        {/*titulo do projeto*/}
        <h2 className={styles.title}>{projeto.titulo}</h2>

        {/*data do projeto*/}
        {projeto.data && <span className={styles.date}>{projeto.data}</span>}

        {/*descricao detalhada*/}
        <p className={styles.descricao}>{projeto.descricao}</p>

        {/*bloco de código (caso exista)*/}
        {projeto.codigoPreview && (
            <div className={styles.codeBlock}>
                <h3>Preview do Código</h3>
                <pre>
                    <code>
                        {projeto.codigoPreview}
                    </code>
                </pre>
            </div>
        )}

      </div>

    </div>
  );
}