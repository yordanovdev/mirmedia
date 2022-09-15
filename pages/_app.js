import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import "quill/dist/quill.snow.css";
import Loading from "../components/Loading/Loading";
import RenderHead from "../components/RenderHead/RenderHead";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";

function App({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.Layout ?? MainLayout;

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
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
