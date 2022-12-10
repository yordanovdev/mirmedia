import PostItem from "../components/PostItem/PostItem";
import http from "../services/http/httpService";
import layoutBg from "../public/images/homeSreenLayoutBackground.png";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <div className={styles.home}>
      <br />
      <br />
      <div className={styles.mainPostsContainer}>
        <h1 className={styles.news}>Последни Публикации</h1>
        <div className={styles.posts}>
          {data?.map((post) => (
            <PostItem key={post.id} data={post} />
          ))}
        </div>
        <Link href={"/blog"}>
          <button className={styles.seeMore}>Виж още</button>
        </Link>
      </div>
      <div
        className={styles.aboutUs}
        style={{ backgroundImage: `url(${layoutBg.src})` }}
      >
        <div className={styles.people}>
          <div className={styles.peopleText}>
            <h2>
              MIRMEDIA е първата независима ученическа медия в България, целяща
              да ангажира младото поколение и всички будни граждани с наболелите
              за обществото теми и проблеми, представяйки информацията през
              призмата на независимата и обективна журналистика.
            </h2>
          </div>
          <div className={styles.person}>
            <img
              src="/images/boyanStandingPhoto.png"
              width={400}
              height={500}
              alt="founder"
            />
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
  var result = await http.get("api/services/app/Posts/GetLatestPosts");
  var data = await result.data;

  return {
    props: {
      data: data.result,
    },
  };
}
