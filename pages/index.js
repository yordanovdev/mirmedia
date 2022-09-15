import PostItem from "../components/PostItem/PostItem";
import http from "../services/http/httpService";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <div className={styles.home}>
      <div className={styles.posts}>
        {data?.map((post) => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
      <div className={styles.aboutUs}>
        {/* <h1>Кои сме ние?</h1> */}
        <div className={styles.people}>
          <div className={styles.peopleText}>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati blanditiis cum repudiandae. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Officia itaque quo ipsum.
            </h2>
          </div>
          <div className={styles.person}>
            <img
              src="/images/founder.png"
              width={400}
              height={500}
              alt="founder"
            />
            {/* <h2>Боян Братанов</h2> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=59"
  );
  try {
    var result = await http.get("api/services/app/Posts/GetLatestPosts");
    var data = await result.data;

    return {
      props: {
        data: data.result,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "500",
        permanent: false,
      },
    };
  }
}
