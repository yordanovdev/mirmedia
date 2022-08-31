import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import "quill/dist/quill.snow.css";
import Loading from "../components/Loading/Loading";
import Head from "next/head";

function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? MainLayout;
  const CustomHead = Component.Head ?? RenderHead;
  return (
    <Layout>
      <CustomHead />
      <Loading />
      <RenderHead />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

const RenderHead = () => {
  return (
    <Head>
      <meta
        property="og:image"
        content="https://mirmedia.vercel.app/images/logo.png"
      />
      <meta property="og:title" content={"Mir Media"} />
      <meta
        property="og:description"
        content={
          "Occaecat sint culpa reprehenderit sint cupidatat duis. Aliqua reprehenderit ullamco ipsum amet nisi in occaecat mollit."
        }
      />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"Mir Media"} />
      <meta
        name="twitter:description"
        content={
          "Culpa magna cillum do consequat occaecat. Occaecat et excepteur officia non consequat eu non culpa deserunt ipsum consequat."
        }
      />
    </Head>
  );
};
