import styles from './page.module.css';
import Header from '@/components/layout/header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>Admin</h1>
    </main>
  );
}