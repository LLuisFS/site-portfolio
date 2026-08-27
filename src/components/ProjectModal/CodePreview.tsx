import styles from './ProjectModal.module.css';

interface CodePreviewProps {
  codigo: string;
}

export function CodePreview({ codigo }: CodePreviewProps) {
  return (
    <div className={styles.codeBlock}>
      <h3>Preview do Código</h3>
      <pre>
        <code>{codigo}</code>
      </pre>
    </div>
  );
}
