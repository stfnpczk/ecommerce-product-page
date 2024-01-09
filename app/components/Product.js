import styled from 'styled-components'; //
import { sizes } from '../styling/Globals';
import Info from './Info.js';
import Gallery from './Gallery.js';

const ProductStyles = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: ${sizes.desktop}) {
    flex-direction: row;
    gap: 7.8125rem;
    padding: 0 2.9688rem;
  }
`;

export default function Product({
  inputQuantity,
  setInputQuantity,
  setCartQuantity,
}) {
  return (
    <ProductStyles>
      <Gallery />
      <Info
        inputQuantity={inputQuantity}
        setInputQuantity={setInputQuantity}
        setCartQuantity={setCartQuantity}
      />
    </ProductStyles>
  );
}
