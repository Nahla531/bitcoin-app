import React from "react";
import styles from "../styles/PriceList.module.scss";
import { useSelector } from "react-redux";
import PriceCard from "./PriceCard";
const PriceList = ({ prevPrices }) => {
  const priceList = useSelector((state) => state.prices?.value);
  const prices = priceList.map((item, index) => {
    return {
      ...item,
      prevPrice: prevPrices[index]?.price,
    };
  });
  console.log("prices", prices);
  return (
    <div className={styles.priceList}>
      {prices.map((item, index) => (
        <PriceCard
          key={index}
          code={item?.code}
          price={item?.price}
          prevPrice={item?.prevPrice}
        />
      ))}
    </div>
  );
};

export default PriceList;
