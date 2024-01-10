import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import avatar from '../../public/image-avatar.png';
import { sizes } from '../styling/Globals';
import Modal from './Modal';
import { hamburgerModal } from '../styling/theme';
import Cart from './Cart';
import Image from 'next/image';
import { useWindowWidth } from '../hooks/useWindowWidth';

import Popover from '@mui/material/Popover';

const HeaderStyles = styled.header`
  padding: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--white);

  @media (min-width: ${sizes.tablet}) {
    padding: unset;
    margin: 0 0 2rem;
  }

  @media (min-width: ${sizes.desktop}) {
    margin: 0 0 5.625rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: ${sizes.tablet}) {
    align-items: center;
    border-bottom: 0.0625rem solid #e4e9f2;
    padding: 1.5625rem 0 1.5625rem;
  }

  @media (min-width: ${sizes.desktop}) {
    padding: 1.75rem 0 2.125rem;
  }
`;

const Wrapper = styled.nav`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  @media (min-width: ${sizes.tablet}) {
    gap: 2.1875rem;
    align-items: unset;
  }

  @media (min-width: ${sizes.desktop}) {
    gap: 3.5rem;
  }

  .logoContainer {
    align-self: center;
    order: 0;
    cursor: pointer;

    @media (min-width: ${sizes.tablet}) {
      align-self: unset;
    }
  }

  .mobileContainer {
    order: -1;
  }
`;

const Hamburger = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MobileNavigation = styled.ul`
  margin: 3.375rem 0 0;

  li {
    font-weight: 700;
    color: var(--black);
    font-size: 1.125rem;
    line-height: 1.125rem;
    cursor: pointer;
    margin-bottom: 1.25rem;
    width: fit-content;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  width: 1.375rem;
  height: 1.375rem;

  &:focus-visible {
    outline: none;
  }
`;

const DesktopNavigation = styled.ul`
  @media (min-width: ${sizes.tablet}) {
    display: flex;
    gap: 1rem;
  }

  @media (min-width: ${sizes.desktop}) {
    gap: 2rem;
  }

  .link {
    color: var(--darkGray);
    position: relative;
    cursor: pointer;
  }

  .link:hover {
    color: var(--black);
  }

  .link::before {
    @media (min-width: ${sizes.desktop}) {
      background-color: var(--pumpkinOrange);
      bottom: -3.125rem;
      content: '';
      height: 0.25rem;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: transform 0.3s ease-in;
      width: 100%;
    }
  }

  .link:hover::before {
    transform: scaleX(1);
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.375rem;
  position: relative;

  .avatar {
    cursor: pointer;
    border-radius: 50%;

    @media (min-width: ${sizes.desktop}) {
      width: 3.125rem;
      height: 3.125rem;
    }
  }
  .avatar:hover {
    border: 0.125rem solid var(--pumpkinOrange);
  }

  .cartIcon {
    position: relative;
    align-self: flex-end;
    cursor: pointer;

    @media (min-width: ${sizes.tablet}) {
      align-self: unset;
    }

    &:hover {
      svg path {
        fill: var(--black);
      }
    }
  }

  .cartBasket {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    position: absolute;
    top: -0.375rem;
    right: -0.3125rem;
    width: 0.9375rem;
    height: 0.9375rem;
    color: var(--white);
    background-color: var(--orange);
    border-radius: 50%;
  }
`;

export default function Header({ cartQuantity, setCartQuantity }) {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowWidth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  //MUI popover
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <HeaderStyles>
      <Container>
        <Wrapper>
          <div className='logoContainer' href='/'>
            <svg width='138' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z'
                fill='#1D2026'
                fillRule='nonzero'
              />
            </svg>
          </div>

          {windowSize.width >= 768 ? (
            <DesktopNavigation>
              <li className='link'>Collections</li>
              <li className='link'>Men</li>
              <li className='link'>Women</li>
              <li className='link'>About</li>
              <li className='link'>Contact</li>
            </DesktopNavigation>
          ) : (
            <div className='mobileContainer'>
              <Hamburger onClick={() => setIsOpen(true)}>
                <svg width='16' height='15' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
                    fill='#69707D'
                    fillRule='evenodd'
                  />
                </svg>
              </Hamburger>
              <ThemeProvider theme={hamburgerModal}>
                <Modal
                  onClose={() => setIsOpen(false)}
                  open={isOpen}
                  theme={hamburgerModal}
                >
                  <CloseButton onClick={() => setIsOpen(false)}>
                    <svg
                      width='19'
                      height='20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                        fill='#69707D'
                        fillRule='evenodd'
                      />
                    </svg>
                  </CloseButton>
                  <MobileNavigation>
                    <li className='link'>Collections</li>
                    <li className='link'>Men</li>
                    <li className='link'>Women</li>
                    <li className='link'>About</li>
                    <li className='link'>Contact</li>
                  </MobileNavigation>
                </Modal>
              </ThemeProvider>
            </div>
          )}
        </Wrapper>

        <Profile>
          <button
            aria-describedby={id}
            variant='contained'
            onClick={handleClick}
            className='cartIcon'
            aria-label='cart icon'
          >
            <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                fill='#69707D'
                fillRule='nonzero'
              />
            </svg>
            {cartQuantity > 0 && (
              <span className='cartBasket'>{cartQuantity}</span>
            )}
          </button>

          <Popover
            disableScrollLock={true}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            sx={{ mt: 3.5 }} //mobile/ tablet?
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Cart
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity}
            />
          </Popover>

          <div>
            <Image
              className='avatar'
              src={avatar}
              width={24}
              height={24}
              alt='Picture of the customer'
            />
          </div>
        </Profile>
      </Container>
    </HeaderStyles>
  );
}
