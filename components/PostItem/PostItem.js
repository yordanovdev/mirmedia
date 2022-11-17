import React from "react";
import styles from "../../styles/PostItem.module.css";
import Link from "next/link";

const PostItem = ({
  data: { title, creationTime, id, description, imageUrl },
}) => {
  return (
    <Link href={"/posts/" + id}>
      <div className={styles.main}>
        <img src={imageUrl ?? ""} alt="something" />
        <h2>{title?.substring(0, 30)}...</h2>
        <p className={styles.dateTime}>
          <i className="fa-regular fa-clock"></i>
          {new Date(creationTime).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

export default PostItem;
