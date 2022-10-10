import React from "react";
import styles from "../styles/PriceList.module.scss";
import { useSelector } from "react-redux";
import PriceCard from "./PriceCard";
const PriceList = () => {
  const priceList = useSelector((state) => state.pricesReducer?.value);
  return (
    <div className={styles.priceList}>
      {priceList.map((item, index) => (
        <PriceCard key={index} code={item?.code} price={item?.price} />
      ))}
    </div>
  );
};

export default PriceList;
