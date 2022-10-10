/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/PriceCard.module.scss";
const PriceCard = ({ code, price }) => {
  return (
    <div className={styles.priceList_card}>
      <h2 className={styles.priceList_card__title}>{code}</h2>
      <div className={styles.priceList_card__cardRow}>
        <div className={styles.priceList_card__col}>
          <img
            src="../bitcoin.png"
            alt="bitcoin logo"
            className={styles.btcImg}
          />
          <div className={styles.innerCol}>
            <span>Bitcoin </span>
          </div>
        </div>
        <div className={styles.priceList_card__col}>
          <h6>{price}</h6>
          <div className={styles.percentage}>-0.95%</div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
