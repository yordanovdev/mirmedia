import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import PostItem from "../../components/PostItem/PostItem";
import http from "../../services/http/httpService";
import styles from "../../styles/Blog.module.css";

export default function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={styles.main}>
      {data.length <= 0 && (
        <div className={styles.spinnerWrap}>
          <RotatingLines
            strokeColor="grey"
            className={styles.spinner}
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={data.length <= 0}
          />
        </div>
      )}
      {data?.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
}

async function getData() {
  var result = await http.get("api/services/app/Posts/GetAll");
  var data = await result.data;
  return {
    data: data.result.items,
  };
}
