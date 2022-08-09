import Link from "next/link";
import BlankLayout from "../components/Layout/BlankLayout";
import styles from "../styles/NotFound.module.css";

export default function Error() {
  return (
    <div className={styles.main}>
      <div className={styles.notfound}>
        <div className={styles["notfound-404"]}>
          <h1>500</h1>
          <h2>An error occurred</h2>
        </div>
        <Link href="/">Homepage</Link>
      </div>
    </div>
  );
}

Error.Layout = BlankLayout;
