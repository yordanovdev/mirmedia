import React from "react";
import styles from "../../styles/MainLayout.module.css";
import NavBar from "../NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
