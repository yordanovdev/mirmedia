import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.quoteContainer}>
        <h1>Join now!</h1>
        <p>
          България има нужда от вас, от вашите сили, познания, воля и устрем!
        </p>
      </div>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" />
        <h2>Време ни е за възраждане!</h2>
      </div>
      <div className={styles["social-links"]}>
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/mirmedia.bg/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
