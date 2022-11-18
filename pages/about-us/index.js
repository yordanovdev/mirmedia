import Image from "next/image";
import React from "react";
import styles from "../../styles/AboutUs.module.scss";

const data = [
  {
    image: "/images/boyancostume2V2crop.png",
    name: "Боян Братанов",
    role: "founder",
    socials: [
      {
        icon: "fab fa-instagram",
        url: "https://www.instagram.com/boyan.bratanov/",
      },
    ],
  },
  {
    image: "/images/co-founder.png",
    name: "Иво Пейчев",
    role: "co-founder",
    socials: [
      {
        icon: "fab fa-instagram",
        url: "https://www.instagram.com/boyan.bratanov/",
      },
    ],
  },
];

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <section className={styles.team}>
        <h1>Meet our team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam
        </p>
        <div className={styles.people}>
          {data.map((person) => (
            <div className={styles.person} key={person.name}>
              <img src={person.image} alt={person.name} />
              <div className={styles.personInfo}>
                <div className={styles.info}>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>

                <div className={styles.socials}>
                  {person.socials.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
