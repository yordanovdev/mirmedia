import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/NavBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../services/auth/useAuth";
import types from "../../types";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    setAuthenticated(auth.isAuth());
    setCategoryOpen(false);
    setOpen(false);
  }, [router.asPath]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <div
      onMouseLeave={() => {
        setCategoryOpen(false);
      }}
    >
      <div className={styles.navbar}>
        <div className={styles.leftSide}>
          <Link href={"/"}>
            <div className={styles.navLogo}>
              <img
                src="/images/logo.png"
                alt="logo image"
                className={styles.logo}
              />
            </div>
          </Link>
          <Link href={"/"}>
            <div className={styles.navText}>
              <h2>MIRMEDIA.BG</h2>
              <p>независими и обективни</p>
            </div>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <div className={`${styles.links} ${open && styles.open}`}>
            <button onClick={() => setOpen(false)} className={styles.closeBtn}>
              <i className="fa fa-close" />
            </button>
            {links.map((link) => (
              <Link href={link.to ?? "/"} key={link.text}>
                <p
                  className={styles.link}
                  onMouseEnter={() => {
                    if (link.name?.includes("categor")) {
                      setCategoryOpen(true);
                    }
                  }}
                >
                  {link.text}
                </p>
              </Link>
            ))}
            {authenticated && (
              <>
                <Link href={"/signals/"}>
                  <p className={styles.link}>Signals</p>
                </Link>
              </>
            )}
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
                style={{ backgroundColor: "white", color: "black" }}
              >
                Logout
              </button>
            </div>
          )}

          {/* <Link href={"/join-us"}>
            <div className={`${styles.actions} ${styles.btnSignal}`}>
              <button className={styles.volunteerBtn}>Подай Сигнал</button>
            </div>
          </Link> */}
          <button onClick={() => setOpen(true)} className={styles.openBtn}>
            <i className="fa fa-bars" />
          </button>
        </div>
      </div>
      {categoryOpen && (
        <div className={styles.categoryContainer}>
          {types.map((i) => (
            <Link href={"/categories/" + i.name} key={i.name}>
              <div>
                <h2>{i.label}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;

const links = [
  {
    text: "Новини",
    to: "/",
  },
  {
    text: "Политика",
    to: "/",
  },
  {
    text: "Блог",
    to: "/blog",
  },
  {
    text: "Екип",
    to: "/about-us",
  },
  {
    text: "Контакти",
    to: "/contacts",
  },
];
