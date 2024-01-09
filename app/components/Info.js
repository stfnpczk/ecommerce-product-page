import styled from 'styled-components';
import { sizes } from '../styling/Globals';

const InfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey);
  padding: 1.5625rem;

  @media (min-width: ${sizes.desktop}) {
    padding: 3.875rem 0 0;
    flex: 1 1 50%;
  }

  .title {
    color: var(--orange);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1156rem;

    @media (min-width: ${sizes.desktop}) {
      font-size: 0.8125rem;
      letter-spacing: 0.125rem;
    }
  }

  h1 {
    font-size: 1.75rem;
    line-height: 2rem;
    margin: 1.1875rem 0 0.9375rem;

    @media (min-width: ${sizes.desktop}) {
      font-size: 2.75rem;
      line-height: 3rem;
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;

  @media (min-width: ${sizes.desktop}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.375rem;
    margin: 1.5rem 0 2rem;
  }

  .priceContainer {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .priceNew {
    font-size: 1.75rem;
    color: var(--black);
    font-weight: 700;
  }

  .discount {
    background: var(--paleOrange);
    border-radius: 0.375rem;
    color: var(--orange);
    font-size: 1rem;
    font-weight: 700;
    padding: 0.0938rem 0.5938rem;
  }

  .priceOld {
    font-size: 1rem;
    font-weight: 700;
    color: var(--mediumGray);
    text-decoration: line-through;
  }
`;

const Cta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${sizes.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ButtonQuantity = styled.button`
  background: var(--lightGray);
  display: flex;
  border-radius: 0.625rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;

  @media (min-width: ${sizes.desktop}) {
    flex: 1 1 39%;
  }

  .quantity {
    font-weight: 700;
    color: var(--black);
  }

  .iconMinus,
  .iconPlus {
    cursor: pointer;

    &:hover {
      svg path {
        fill: var(--hoverOrange);
      }
    }
  }
`;

const ButtonAddToCart = styled.button`
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.625rem;
  background: var(--orange);
  color: var(--white);
  font-weight: 700;
  padding: 1rem 0;
  box-shadow: 0rem 1.25rem 3.125rem -1.25rem #ff7e1b;
  flex: 1 1 61%;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: var(--hoverOrange);
  }
`;

export default function Info({
  inputQuantity,
  setInputQuantity,
  setCartQuantity,
}) {
  const handleAddToCart = () => {
    setCartQuantity((cartState) => cartState + inputQuantity);
    setInputQuantity(0);
  };

  return (
    <InfoStyles>
      <span className='title'>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <Price>
        <div className='priceContainer'>
          <span className='priceNew'>$125.00</span>
          <span className='discount'>50%</span>
        </div>
        <span className='priceOld'>$250.00</span>
      </Price>
      <Cta>
        <ButtonQuantity>
          <div
            className='iconMinus'
            onClick={() =>
              setInputQuantity((inputState) =>
                inputState > 0 ? inputState - 1 : 0
              )
            }
          >
            <svg width='12' height='4' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <path
                  d='M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z'
                  id='icon-minus_svg__a'
                ></path>
              </defs>
              <use fill='#FF7E1B' href='#icon-minus_svg__a'></use>
            </svg>
          </div>
          <span className='quantity'>{inputQuantity}</span>
          <div
            className='iconPlus'
            onClick={() => setInputQuantity((inputState) => inputState + 1)}
          >
            <svg
              width='12'
              height='12'
              xmlns='http://www.w3.org/2000/svg'
              xlink='http://www.w3.org/1999/xlink'
            >
              <defs>
                <path
                  d='M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z'
                  id='b'
                />
              </defs>
              <use fill='#FF7E1B' fillRule='nonzero' href='#b' />
            </svg>
          </div>
        </ButtonQuantity>
        <ButtonAddToCart onClick={handleAddToCart}>
          <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill='white'
              fillRule='nonzero'
            />
          </svg>
          Add to cart
        </ButtonAddToCart>
      </Cta>
    </InfoStyles>
  );
}
