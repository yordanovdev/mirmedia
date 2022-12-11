import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.quoteContainer}>
        <h1>Подай сигнал!</h1>
        <p>Подайте сигнал до нашата редакция!</p>
      </div>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="logo" />
        <h2>MIRMEDIA.BG</h2>
        <p>Всички права запазени mirmedia.bg &copy; 2022</p>
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles["social-links"]}>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC4Nh0CvW4V_LMpzzw3267rA"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/mirmedia.bg/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <Link href={"/join-us"}>
          <div className={styles.rightSideSecondElement}>
            <button>Подкрепи Ни</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
