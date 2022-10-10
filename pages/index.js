import { getBpi } from "./api/getBpi";
import { useDispatch } from "react-redux";
import { setPrices } from "../redux/features/prices/pricesSlice";
import { useEffect, useState } from "react";
import PriceList from "../components/PriceList";
import Layout from "../components/Layout";
export default function Home() {
  const dispatch = useDispatch();
  const [statePrev, setState] = useState([]);
  let result;
  const setData = async () => {
    const data = await getBpi();
    const bpi = data["bpi"];
    result = Object.keys(bpi)?.map(function (key) {
      return { code: bpi[key]?.code, price: bpi[key]?.rate };
    });
    dispatch(setPrices(result));
  };

  useEffect(() => {
    setData();
    let interval = setInterval(() => {
      setState(result);
      setData();
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Layout>
        <main className="container">
          <header>
            <h1>Bitcoin price </h1>
          </header>
          <PriceList prevPrices={statePrev} />
        </main>
      </Layout>
    </>
  );
}
