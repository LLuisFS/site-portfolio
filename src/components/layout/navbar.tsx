import styles from './navbar.module.css'
import Button from '@/components/NavBarButton'

export default function NavBar() {
    return (
        <nav className="">
            <ul className={styles.links}>
                <Button text="Home" href="/" />
                <Button text="Sobre" href="/about" />
                <Button text="Admin" href="/admin" />
            </ul>
        </nav>
    );
}