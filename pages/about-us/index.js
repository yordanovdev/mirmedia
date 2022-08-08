import Image from "next/image";
import React from "react";
import styles from "../../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.main}>
        <section className={styles.section}>
          <div className={styles.logo}>
            <Image
              src={"/images/founder.jpeg"}
              width={200}
              height={200}
              alt="logo"
            />
          </div>
          <blockquote className={styles.blockquote}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            accusamus incidunt fuga quos sit numquam quo dolor quod, saepe
            dolores modi nihil voluptas? Voluptatum enim culpa vero eius commodi
            laudantium reprehenderit, quam magni perspiciatis necessitatibus
            laboriosam dolorem eligendi nobis officiis veritatis. Ex,
            perspiciatis eum aliquam ullam delectus ipsam excepturi unde.
          </blockquote>
        </section>
        <section className={styles.section}>
          <blockquote className={styles.blockquote}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            accusamus incidunt fuga quos sit numquam quo dolor quod, saepe
            dolores modi nihil voluptas? Voluptatum enim culpa vero eius commodi
            laudantium reprehenderit, quam magni perspiciatis necessitatibus
            laboriosam dolorem eligendi nobis officiis veritatis. Ex,
            perspiciatis eum aliquam ullam delectus ipsam excepturi unde.
          </blockquote>
          <div className={styles.logo}>
            <Image
              src={"/images/co-founder.jpeg"}
              width={200}
              height={200}
              alt="logo"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
