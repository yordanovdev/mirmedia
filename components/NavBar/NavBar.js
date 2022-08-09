import React, { Fragment, useState } from "react";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const [open, setOpen] = useState(false);
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
        <div className={`${styles.links} ${open && styles.open}`}>
          <button onClick={() => setOpen(false)} className={styles.closeBtn}>
            <i className="fa fa-close" />
          </button>
          {links.map((link) => (
            <Link href={link.to} key={link.text}>
              <p className={styles.link}>{link.text}</p>
            </Link>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.volunteerBtn}>Стани Член</button>
        </div>
        <button onClick={() => setOpen(true)} className={styles.openBtn}>
          <i className="fa fa-bars" />
        </button>
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
