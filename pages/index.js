import PostItem from "../components/PostItem/PostItem";
import http from "../services/http/httpService";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.home}>
      <div className={styles.posts}>
        {data?.map((post) => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
      <div className={styles.aboutUs}>
        <h1>Кои сме ние?</h1>
        <div className={styles.people}>
          <div className={styles.person}>
            <Image
              src="/images/founder.jpeg"
              width={300}
              height={400}
              alt="founder"
            />
            <h2>Боян Братанов</h2>
            <h3>Founder of MIRMEDIA.BG. Ex tempor sit labore velit elit.</h3>
          </div>
          <div className={styles.person}>
            <Image
              src="/images/co-founder.jpeg"
              width={300}
              height={400}
              alt="founder"
            />
            <h2>Unknown Human Being</h2>
            <h3>
              Co-Founder of MIRMEDIA.BG. Labore do Lorem pariatur voluptate
            </h3>
          </div>
        </div>
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
