import Link from "next/link";
import styles from "./Header.module.css"
export default function Header(){
    return(
        <>
        <header>
            <div className={styles.menu}>
            <Link href="/">home</Link>
            <Link href="/pages/galeria">galeria</Link>
            <Link href="/pages/contato">contato</Link>
            </div>
        </header>
        </>
    )
}