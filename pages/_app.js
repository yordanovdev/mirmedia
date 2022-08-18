import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import "quill/dist/quill.snow.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? MainLayout;
  return (
    <Layout>
      <RenderHead />
      <Component {...pageProps} />
    </Layout>
  );
}

const RenderHead = () => {
  return (
    <Head>
      <meta property="og:image" content="<%= require('./images/logo.png') %>" />
      <meta property="og:image:alt" content={"logo"} />
      <meta property="og:title" content={"Mir Media"} />
      <meta
        property="og:description"
        content={"Occaecat sint culpa reprehenderit sint cupidatat duis."}
      />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"Mir Media"} />
      <meta
        name="twitter:description"
        content={"Culpa magna cillum do consequat occaecat."}
      />
    </Head>
  );
};

export default App;
