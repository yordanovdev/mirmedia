import React from "react";
import Image from "next/image";
import styles from "../../styles/PostItem.module.css";

const PostItem = ({ data: { title, content, creationTime } }) => {
  return (
    <div className={styles.main}>
      <Image src={"/images/protest.png"} alt="" width={160} height={200} />
      <h2>{title}</h2>
      <p className={styles.dateTime}>
        <i className="fa-regular fa-clock"></i>
        {new Date(creationTime).toLocaleDateString()}
      </p>
      <p>{content.substring(0, 100)}...</p>
    </div>
  );
};

export default PostItem;
