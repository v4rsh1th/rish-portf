import Link from "next/link";
import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span>
        <Link href="/about">
          About
        </Link>
        <Link href="/work">
          Work
        </Link>
      </span>
      <span>
        <p>@yourusername</p>
      </span>
    </header>
  );
}