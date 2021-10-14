import Head from "next/head";
import { Button, ButtonLink } from "../components/Button";
import CurrencyTable from "../components/CurrencyTable";
import Footer from "../components/Footer";
import Layout from "../components/Layout/Layout";
import {GradientText} from "../components/GradientText";

export default function Home() {
  return (
    <div>
    <Layout>
    <GradientText/>
      <CurrencyTable/>
      </Layout>
      <Footer/>
    </div>
  );
}
