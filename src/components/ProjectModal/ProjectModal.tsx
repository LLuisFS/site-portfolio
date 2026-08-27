'use client';

import { useState, useEffect } from 'react';
import { Projeto } from '@/types/project';
import styles from './ProjectModal.module.css';
import { CodePreview } from './CodePreview';
import { ProjectGallery } from './ProjectGallery';
import { Lightbox } from './Lightbox';

interface ProjectModalProps {
  projeto: Projeto | null;
  onClose: () => void;
}

export function ProjectModal({ projeto, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setSelectedImage(null);
  }, [projeto]);

  if (!projeto) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {/* Botão de fechar o modal */}
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>

          {/* Badge com o nome da categoria */}
          <span className={styles.badge}>{projeto.categoria}</span>

          {/* Título do projeto */}
          <h2 className={styles.title}>{projeto.titulo}</h2>

          {/* Data do projeto */}
          {projeto.data && <span className={styles.date}>{projeto.data}</span>}

          {/* Descrição detalhada */}
          <p className={styles.descricao}>{projeto.descricao}</p>

          {/* Bloco de código (caso exista) */}
          {projeto.codigoPreview && <CodePreview codigo={projeto.codigoPreview} />}

          {/* Galeria de imagens (caso exista) */}
          {projeto.imagens && projeto.imagens.length > 0 && (
            <ProjectGallery
              imagens={projeto.imagens}
              titulo={projeto.titulo}
              onSelectImage={setSelectedImage}
            />
          )}

          {/* Botão de link externo (caso exista) */}
          {projeto.linkExterno && (
            <a
              href={projeto.linkExterno}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              Ver Projeto Completo
            </a>
          )}
        </div>
      </div>

      {/* Modal da imagem em tela cheia (Lightbox) */}
      {selectedImage && (
        <Lightbox
          imageUrl={selectedImage}
          titulo={projeto.titulo}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}