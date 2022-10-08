import Head from "next/head";
import { getBpi } from "./api/getBpi";
import { useDispatch } from "react-redux";
import { setPrices } from "../redux/features/prices/pricesSlice";
import { useEffect } from "react";
import PriceList from "../components/PriceList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Home() {
  const dispatch = useDispatch();

  const setData = async () => {
    const data = await getBpi();
    const bpi = data["bpi"];
    const result = Object.keys(bpi)?.map(function (key) {
      return { price: bpi[key]?.rate };
    });
    dispatch(setPrices(result));
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setData();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <Head>
        <title>Bitcoin Prices</title>
        <meta
          name="description"
          content="bitcoin price app using nextjs and react-reduxToolkit"
        />
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <main>
        <header>
          <h1>Bitcoin price </h1>
        </header>
        <PriceList />
      </main>

      <Footer />
    </>
  );
}
