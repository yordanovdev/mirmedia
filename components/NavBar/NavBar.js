import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../services/auth/useAuth";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    setAuthenticated(auth.isAuth());
    setOpen(false);
  }, [router.asPath]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

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
        {authenticated && (
          <div className={styles.actions}>
            <Link href={"/posts/create"}>
              <button
                className={`${styles.volunteerBtn} ${styles.createPost}`}
                style={{ backgroundColor: "purple", marginRight: "15px" }}
              >
                Create Post
              </button>
            </Link>
            <button
              className={`${styles.volunteerBtn} ${styles.logoutBtn}`}
              onClick={handleLogout}
              style={{ backgroundColor: "blue" }}
            >
              Logout
            </button>
          </div>
        )}

        <Link href={"/join-us"}>
          <div className={styles.actions}>
            <button className={styles.volunteerBtn}>Стани Член</button>
          </div>
        </Link>
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
];
