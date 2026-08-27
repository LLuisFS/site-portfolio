import Link from 'next/link';
import styles from './NavBarButton.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ text, onClick, href }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <button className={styles.button}>{text}</button>
      </Link>
    );
  }

  return (
    <button onClick={onClick}>{text}</button>
  );
}