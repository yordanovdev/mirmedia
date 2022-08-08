import Link from "next/link";
import BlankLayout from "../components/Layout/BlankLayout";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <div className={styles.notfound}>
        <div className={styles["notfound-404"]}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link href="/">Homepage</Link>
      </div>
    </div>
  );
}

NotFound.Layout = BlankLayout;
