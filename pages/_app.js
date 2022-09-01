import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import "quill/dist/quill.snow.css";
import Loading from "../components/Loading/Loading";
import RenderHead from "../components/RenderHead/RenderHead";

function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? MainLayout;
  return (
    <Layout>
      <Component {...pageProps} />
      <RenderHead />
      <Loading />
    </Layout>
  );
}

export default App;
