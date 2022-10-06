import React from "react";
import { RotatingLines } from "react-loader-spinner";
import PostItem from "../../components/PostItem/PostItem";
import http from "../../services/http/httpService";
import styles from "../../styles/Category.module.css";

const Category = ({ data }) => {
  return (
    <div className={styles.category}>
      {!data || data.length <= 0 ? (
        <div>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        data.map((post) => <PostItem key={post.id} data={post} />)
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { name } = context.query;
  const result = await http.get("api/services/app/Posts/GetPostsByCategory", {
    params: { name },
  });
  const data = result.data;
  return {
    props: {
      data: data.result,
    },
  };
};

export default Category;
