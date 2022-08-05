import React from "react";
import PostItem from "../components/PostItem/PostItem";
import http from "../services/http/httpService";
import styles from "../styles/Blog.module.css";

export default function Blog({ data }) {
  return (
    <div className={styles.main}>
      {data?.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  var result = await http.get("api/services/app/Posts/GetAll");
  var data = await result.data;
  return {
    props: {
      data: data.result.items,
    },
  };
}
