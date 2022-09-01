import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import RenderHead from "../components/RenderHead/RenderHead";

function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? MainLayout;
  return (
    <Layout>
      <Component {...pageProps} />
      <RenderHead />
    </Layout>
  );
}

export default App;

