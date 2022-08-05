import React from "react";
import styles from "../../styles/MainLayout.module.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.content}>{children}</div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default MainLayout;
