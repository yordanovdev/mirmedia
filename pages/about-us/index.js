import Image from "next/image";
import React from "react";
import styles from "../../styles/AboutUs.module.scss";

const data = [
  {
    image: "/images/boyanMeetTeamPhoto.png",
    name: "Боян Братанов",
    role: "редактор",
    socials: [
      {
        icon: "fab fa-instagram",
        url: "https://www.instagram.com/boyan.bratanov/",
      },
      {
        icon: "fa-brands fa-youtube",
        url: "https://www.youtube.com/@BoyanBratanov",
      },
      {
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/profile.php?id=100058473845287",
      },
    ],
  },
];

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <section className={styles.team}>
        <h1>ЕКИПЪТ НА MIRMEDIA.BG</h1>
        <p>
          Екипът ни се състои от позитивни, мотивирани и будни младежи, за които
          обективната журналистика е приоритет.
        </p>
        <div className={styles.people}>
          {data.map((person) => (
            <div className={styles.person} key={person.name}>
              <img src={person.image} alt={person.name} />
              <div className={styles.personInfo}>
                <div className={styles.info}>
                  <h3>{person.name}</h3>
                  <span>-</span>
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
