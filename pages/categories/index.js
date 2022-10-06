import Link from "next/link";
import React from "react";
import styles from "../../styles/Categories.module.css";
import types from "../../types";

const Categories = () => {
  return (
    <div className={styles.container}>
      {types.map((type) => (
        <Link href={"/categories/" + type.name} key={type.name}>
          <div
            className={styles.block}
            style={{ backgroundImage: `url(${type.image})` }}
          >
            <h2>{type.label}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
