import styles from './ProjectModal.module.css';

interface ProjectGalleryProps {
  imagens: string[];
  titulo: string;
  onSelectImage: (url: string) => void;
}

export function ProjectGallery({ imagens, titulo, onSelectImage }: ProjectGalleryProps) {
  return (
    <div className={styles.section}>
      <h3>Galeria / Previews</h3>
      <div className={styles.imageGrid}>
        {imagens.map((imgUrl, idx) => (
          <img
            key={idx}
            src={imgUrl}
            alt={`Preview ${idx + 1} de ${titulo}`}
            className={styles.img}
            onClick={(e) => {
              e.stopPropagation();
              onSelectImage(imgUrl);
            }}
          />
        ))}
      </div>
    </div>
  );
}
