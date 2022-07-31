import React from "react";
import Image from "next/image";
import styles from "../../styles/PostItem.module.css";
import Link from "next/link";

const PostItem = ({ data: { title, creationTime, id, description } }) => {
  return (
    <Link href={"/posts/" + id}>
      <div className={styles.main}>
        <Image src={"/images/protest.png"} alt="" width={160} height={200} />
        <h2>{title}</h2>
        <p className={styles.dateTime}>
          <i className="fa-regular fa-clock"></i>
          {new Date(creationTime).toLocaleDateString()}
        </p>
        <p>{description?.substring(0, 100)}...</p>
      </div>
    </Link>
  );
};

export default PostItem;
