import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.quoteContainer}>
        <h1>Присъедини се!</h1>
        <p>Стани част от първата независима ученическа медия в България!</p>
      </div>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="logo" />
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
            <button>Подай сигнал</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
