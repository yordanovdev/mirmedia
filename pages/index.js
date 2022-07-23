import http from "../services/http/httpService";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.home}>
      <div className={styles.posts}>
        {data?.map(post => <h1 key={post.id}>{post.title}</h1>)}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  var result = await http.get("api/services/app/Posts/GetLatestPosts");
  var data = await result.data;
  return {
    props: {
      data: data.result,
    },
  };
}
