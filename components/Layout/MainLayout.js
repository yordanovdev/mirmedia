import React from "react";
import styles from "../../styles/MainLayout.module.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
