'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';

import Head from 'next/head';

export default function Page() {
  const [inputQuantity, setInputQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <React.Fragment>
      <Head>
        <title>E-Commerce Product Page</title>
      </Head>
      <Header cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
      <Product
        inputQuantity={inputQuantity}
        setInputQuantity={setInputQuantity}
        setCartQuantity={setCartQuantity}
      />
    </React.Fragment>
  );
}
