'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Projeto } from '@/types/project';
import styles from './ProjectModal.module.css';

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
          <button className={styles.closeBtn} onClick={onClose}>X</button>
          
          {/* Badge com o nome da categoria */}
          <span className={styles.badge}>{projeto.categoria}</span>

          {/* Título do projeto */}
          <h2 className={styles.title}>{projeto.titulo}</h2>

          {/* Data do projeto */}
          {projeto.data && <span className={styles.date}>{projeto.data}</span>}

          {/* Descrição detalhada */}
          <p className={styles.descricao}>{projeto.descricao}</p>

          {/* Bloco de código (caso exista) */}
          {projeto.codigoPreview && (
            <div className={styles.codeBlock}>
              <h3>Preview do Código</h3>
              <pre>
                <code>{projeto.codigoPreview}</code>
              </pre>
            </div>
          )}

          {/* Galeria de imagens (caso exista) */}
          {projeto.imagens && projeto.imagens.length > 0 && (
            <div className={styles.section}>
              <h3>Galeria / Previews</h3>
              <div className={styles.imageGrid}>
                {projeto.imagens.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`Preview ${idx + 1} de ${projeto.titulo}`}
                    className={styles.img}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(imgUrl);
                    }}
                  />
                ))}
              </div>
            </div>
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
      {selectedImage && typeof window !== 'undefined' && createPortal(
        <div
          className={styles.lightboxOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className={styles.lightboxCloseBtn}
          >
            X
          </button>
          <img
            src={selectedImage}
            alt={`Preview em tela cheia de ${projeto.titulo}`}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
}