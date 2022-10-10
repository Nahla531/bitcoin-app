import { getBpi } from "./api/getBpi";
import { useDispatch } from "react-redux";
import { setPrices } from "../redux/features/prices/pricesSlice";
import { useEffect } from "react";
import PriceList from "../components/PriceList";
import Layout from "../components/Layout";
export default function Home() {
  const dispatch = useDispatch();

  const setData = async () => {
    const data = await getBpi();
    const bpi = data["bpi"];
    const result = Object.keys(bpi)?.map(function (key) {
      return { code: bpi[key]?.code, price: bpi[key]?.rate };
    });
    dispatch(setPrices(result));
  };

  useEffect(() => {
    setData();
    let interval = setInterval(() => {
      setData();
    }, 10000);
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
          <PriceList />
        </main>

        
      </Layout>
    </>
  );
}
