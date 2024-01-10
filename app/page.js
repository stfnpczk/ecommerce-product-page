'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';

export default function Page() {
  const [inputQuantity, setInputQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <React.Fragment>
      <Header cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
      <Product
        inputQuantity={inputQuantity}
        setInputQuantity={setInputQuantity}
        setCartQuantity={setCartQuantity}
      />
    </React.Fragment>
  );
}
