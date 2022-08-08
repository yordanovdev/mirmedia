import React, { Fragment } from "react";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <Link href={"/"}>
          <div className={styles.navLogo}>
            <Image
              src="/images/logo.png"
              alt="logo image"
              className={styles.logo}
              width={70}
              height={70}
            />
          </div>
        </Link>
        <Link href={"/"}>
          <div className={styles.navText}>
            <h2>MIRMEDIA.BG</h2>
          </div>
        </Link>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.links}>
          {links.map((link) => (
            <Link href={link.to} key={link.text}>
              <p className={styles.link}>{link.text}</p>
            </Link>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.volunteerBtn}>Стани Член</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const links = [
  {
    text: "Начало",
    to: "/",
  },
  {
    text: "Блог",
    to: "/blog",
  },
  {
    text: "За нас",
    to: "/about-us",
  },
  {
    text: "Контакти",
    to: "/contacts",
  },
];
