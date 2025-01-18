import Link from "next/link";
import styles from "./layout.module.css";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/parts">Parts</Link>
          </li>
          <li>
            <Link href="/brands">Brands</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Made with guarana by marcomaza92</p>
      </footer>
    </header>
  );
};

export default MainLayout;
