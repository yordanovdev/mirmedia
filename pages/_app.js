import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import "quill/dist/quill.snow.css";
import Loading from "../components/Loading/Loading";
import RenderHead from "../components/RenderHead/RenderHead";
import { useEffect } from "react";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.Layout ?? MainLayout;

  useEffect(() => {
    window.scrollY(0);
  }, [router.asPath]);
  return (
    <Layout>
      <Component {...pageProps} />
      <RenderHead />
      <Loading />
    </Layout>
  );
}

export default App;
