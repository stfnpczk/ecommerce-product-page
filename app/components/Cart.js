import styled from 'styled-components';
import productImage from '../../public/image-product-1-thumbnail.jpg';
import Image from 'next/image';

const CartStyles = styled.div`
  width: 22.5rem;
  min-height: 16rem;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  .cartHeading {
    border-bottom: 0.125rem solid #f7f8fd;
    padding: 1.5rem;
  }
`;

const CartBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex: 1 1;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  .emptyMessage {
    align-self: center;
  }
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .cartOrderContainer {
    display: flex;
    gap: 1rem;
  }

  .itemImage {
    border-radius: 0.25rem;
  }

  .deleteIcon {
    align-self: center;
    cursor: pointer;

    &:hover {
      svg path {
        /* fill: var(--orange); */
        fill: #ff7a7a;
      }
    }
  }

  .checkoutButton {
    display: flex;
    justify-content: center;
    gap: 1rem;
    border-radius: 0.625rem;
    background: var(--orange);
    color: var(--white);
    font-weight: 700;
    padding: 1rem 0;
    box-shadow: 0rem 1.25rem 3.125rem -1.25rem #ff7e1b;
    flex: 1 1;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: var(--hoverOrange);
    }
  }
`;

const CartInfo = styled.div`
  .priceCalculation {
    color: var(--darkGray);
    margin-right: 10px;
  }

  .cartSum {
    font-weight: 700;
  }
`;

export default function Cart({ cartQuantity, setCartQuantity }) {
  return (
    <CartStyles>
      <div className='cartHeading'>
        <b>Cart</b>
      </div>

      <CartBody>
        {cartQuantity === 0 ? (
          <p className='emptyMessage'>Your cart is empty</p>
        ) : (
          <CartItem>
            <div className='cartOrderContainer'>
              <Image
                className='itemImage'
                src={productImage}
                width={50}
                height={50}
                alt='product image'
              />
              <CartInfo>
                <p className='itemName'>Fall Limited Edition Sneakers</p>
                <span className='priceCalculation'>
                  $125.00 x {cartQuantity}
                </span>

                <span className='cartSum'>${125 * cartQuantity}.00</span>
              </CartInfo>
              <button className='deleteIcon' onClick={() => setCartQuantity(0)}>
                <svg width='14' height='16' xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <path
                      d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
                      id='a'
                    />
                  </defs>
                  <use fill='#C3CAD9' fillRule='nonzero' href='#a' />
                </svg>
              </button>
            </div>

            <button className='checkoutButton'>Checkout</button>
          </CartItem>
        )}
      </CartBody>
    </CartStyles>
  );
}
