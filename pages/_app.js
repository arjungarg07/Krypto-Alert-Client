import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
}

export default MyApp;
