import Image from "next/image";
import React from "react";
import styles from "../../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.aboutUs}>
        <section className={styles.section}>
          <div className={styles.text}>
            <h1>Boqn Bratanov</h1>
            <div className={styles.textDivider}></div>
            <p>
              Eu exercitation enim nulla elit sit elit.Aliquip reprehenderit
              occaecat consectetur nostrud mollit sunt.Pariatur sit deserunt
              ipsum aliquip magna.Irure nostrud sit consectetur aute mollit
              labore incididunt laboris elit. Eu exercitation enim nulla elit
              sit elit.Aliquip reprehenderit occaecat consectetur nostrud mollit
              sunt.Pariatur sit deserunt ipsum aliquip magna.Irure nostrud sit
              consectetur aute mollit labore incididunt laboris elit.
            </p>
          </div>
          <div className={styles.logo}>
            <Image
              src={"/images/founder.png"}
              width={350}
              height={350}
              alt="logo"
            />
          </div>
        </section>
        <div className={styles.divider}></div>
        <section className={styles.section}>
          <div className={styles.logo}>
            <Image
              src={"/images/co-founder.png"}
              width={350}
              height={350}
              alt="logo"
            />
          </div>
          <div className={styles.text}>
            <h1>Boqn Bratanov</h1>
            <div className={styles.textDivider}></div>
            <p>
              Eu exercitation enim nulla elit sit elit.Aliquip reprehenderit
              occaecat consectetur nostrud mollit sunt.Pariatur sit deserunt
              ipsum aliquip magna.Irure nostrud sit consectetur aute mollit
              labore incididunt laboris elit. Eu exercitation enim nulla elit
              sit elit.Aliquip reprehenderit occaecat consectetur nostrud mollit
              sunt.Pariatur sit deserunt ipsum aliquip magna.Irure nostrud sit
              consectetur aute mollit labore incididunt laboris elit.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
