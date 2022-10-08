import React from "react";
import { useSelector } from "react-redux";
const PriceList = () => {
  const priceList = useSelector((state) => state.pricesReducer?.value);
  console.log(priceList);
  return <div>PriceList</div>;
};

export default PriceList;
