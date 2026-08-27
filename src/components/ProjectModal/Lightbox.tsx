'use client';

import { createPortal } from 'react-dom';
import styles from './ProjectModal.module.css';

interface LightboxProps {
  imageUrl: string;
  titulo: string;
  onClose: () => void;
}

export function Lightbox({ imageUrl, titulo, onClose }: LightboxProps) {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <button onClick={onClose} className={styles.lightboxCloseBtn}>
        X
      </button>
      <img
        src={imageUrl}
        alt={`Preview em tela cheia de ${titulo}`}
        className={styles.lightboxImage}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}
