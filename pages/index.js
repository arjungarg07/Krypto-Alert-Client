import Head from "next/head";
import { Button, ButtonLink } from "../components/Button";
import CurrencyTable from "../components/CurrencyTable";
import Footer from "../components/Footer";
import { GradientText } from "../components/GradientText";
// import AlertModal from "../components/AlertModal";
// import { decode } from "jwt-decode";

const baseUrl = "https://kryptoalert.herokuapp.com";
const localUrl = "http://localhost:8000";

export default function Home({ coins }) {
  if (typeof window !== "undefined") {
    if (process.browser) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "7efcaa30-3f16-4971-8117-01e8ea316e99";
      (function () {
        let d = document;
        let s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  }
  return (
    <div>
      {/* <AlertModal /> */}
      <GradientText />
      <CurrencyTable type="Home" coins={coins} />
      <Footer />
    </div>
  );
}
export async function getServerSideProps(context) {
  const result = await fetch(`${baseUrl}/api/v1/data/top`);
  const json = await result.json();
  const coins = json.data;

  return {
    props: { coins }, // will be passed to the page component as props
  };
}
