import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import "quill/dist/quill.snow.css";

function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? MainLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
