import Head from "next/head";

const RenderHead = () => {
  return (
    <Head>
      <title>Mirmedia</title>
      <meta
        property="og:image"
        content="https://mirmedia.bg/images/logo.png"
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

export default RenderHead;
