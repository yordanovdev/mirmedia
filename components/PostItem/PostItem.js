import React from "react";
import styles from "../../styles/PostItem.module.css";
import Link from "next/link";

const PostItem = ({
  data: { title, creationTime, id, description, imageUrl },
}) => {
  return (
    <Link href={"/posts/" + id}>
      <div className={styles.main}>
        <img src={imageUrl ?? ""} alt="" />
        <h2>{title?.substring(0, 70)}...</h2>
        <p className={styles.dateTime}>
          <i className="fa-regular fa-clock"></i>
          {new Date(creationTime).toLocaleDateString()}
        </p>
        <p>{description?.substring(0, 80)}...</p>
      </div>
    </Link>
  );
};

export default PostItem;
