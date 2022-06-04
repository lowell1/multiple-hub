import "../styles/global.css";
import Nav from "../components/nav/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Multiple</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="images/multiple-favicon.png"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
