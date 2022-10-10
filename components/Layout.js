import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Bitcoin Prices</title>
        <meta
          name="description"
          content="bitcoin price app using nextjs and react-reduxToolkit"
        />
        <link rel="icon" href="../bitcoin.png" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
