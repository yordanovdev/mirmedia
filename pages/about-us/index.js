import Image from "next/image";
import React from "react";
import styles from "../../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.aboutUs}>
        <section className={styles.section}>
          <div className={styles.text}>
            <h1>Боян Братанов</h1>
            <div className={styles.textDivider}></div>
            <p>Founder</p>
          </div>
          <div className={styles.logo}>
            <img
              src={"/images/boyancostume2V2.png"}
              alt="logo"
              className={styles.img}
            />
          </div>
        </section>
        <div className={styles.divider}></div>
        <section className={styles.section}>
          <div className={styles.logo}>
            <img
              src={"/images/co-founder.png"}
              alt="logo"
              className={styles.img}
            />
          </div>
          <div className={styles.text}>
            <h1>Иво Пейчев</h1>
            <div className={styles.textDivider}></div>
            <p>Co-Founder</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
