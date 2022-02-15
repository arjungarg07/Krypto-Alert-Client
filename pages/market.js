import Head from "next/head";
import { Button, ButtonLink } from "../components/Button";
import CurrencyTable from "../components/CurrencyTable";
import Footer from "../components/Footer";
import Layout from "../components/Layout/Layout";
import AlertModal from "../components/AlertModal";

const baseUrl = 'https://kryptoalert.herokuapp.com';
const localUrl = 'http://localhost:8000';

export default function Market({ coins }) {
  return (
    <div>
      <Layout>
        <div>
        {/* {localStorage.setItem(1,'assa')} */}
          <CurrencyTable className="mt-4" type="Market" coins={coins} />
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await fetch(`${baseUrl}/api/v1/data/all`);
  const json = await result.json();
  const coins = json.data;

  return {
    props: { coins }, // will be passed to the page component as props
  };
}
