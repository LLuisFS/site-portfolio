import NavBar from '@/components/layout/navbar'
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Luis F. Soares | DRX</h1>
            <NavBar />

        </header>
    );
}