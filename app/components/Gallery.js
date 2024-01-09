import styled, { ThemeProvider } from 'styled-components';
import { sizes } from '../styling/Globals';
import { useState } from 'react';
import Modal from './Modal.js';
import { data } from '../data/data.js';
import { galleryModal } from '../styling/theme';
import { useWindowWidth } from '../hooks/useWindowWidth';
import Image from 'next/image';

const GalleryStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;

  @media (min-width: ${sizes.desktop}) {
    gap: 2rem;
    flex: 1 1 50%;
  }

  .arrowButtons {
    cursor: pointer;
  }

  .closeIcon {
    position: absolute;
    right: 1.75rem;
    cursor: pointer;
  }

  .closeIcon:hover {
    svg path {
      fill: var(--pumpkinOrange);
    }
  }

  .closeIcon:focus-visible {
    outline: none;
  }
`;

const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: 100% 100% 100% 100%;
  width: inherit;
  transition: all 0.5s ease-in-out;

  @media (min-width: ${sizes.desktop}) {
    cursor: pointer;
    img {
      border-radius: 0.9375rem;
    }
  }

  &.heroImg-0 {
    margin-left: 0;
  }

  &.heroImg-1 {
    margin-left: -100%;
  }

  &.heroImg-2 {
    margin-left: -200%;
  }

  &.heroImg-3 {
    margin-left: -300%;
  }
`;

const CarouselContainerModal = styled(CarouselContainer)`
  .heroContainer {
    padding: 1.75rem 1.75rem 0 1.75rem;
    cursor: default;
  }
`;

const ButtonArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);

  position: absolute;
  top: 45%;
  border-radius: 50%;
  width: clamp(2.5rem, 10.667vw, 4rem);
  height: clamp(2.5rem, 10.667vw, 4rem);
  overflow: hidden;

  &:hover {
    svg path {
      stroke: var(--pumpkinOrange);
    }
  }

  @media (min-width: ${sizes.desktop}) {
    display: none;
  }

  .arrowIcon {
    width: clamp(0.8125rem, 3.467vw, 1.3125rem);
  }
`;

const ButtonPrevious = styled(ButtonArrow)`
  left: 1rem;
`;

const ButtonNext = styled(ButtonArrow)`
  right: 1rem;
`;

const ButtonArrowModal = styled(ButtonArrow)`
  display: flex;
  cursor: pointer;
  top: 33%;

  &:focus-visible {
    outline: none;
  }
`;

const ButtonPreviousModal = styled(ButtonArrowModal)`
  left: 0;
`;

const ButtonNextModal = styled(ButtonArrowModal)`
  right: 0;
`;

const GalleryPreview = styled.div`
  display: none;

  @media (min-width: ${sizes.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.9375rem;

    .thumbnail {
      border-radius: 0.9375rem;
    }
  }
`;

const GalleryPreviewModal = styled(GalleryPreview)`
  padding: 1.75rem;
`;

const Thumbnail = styled.div`
  width: 100%;
  border-radius: 0.9375rem;
  overflow: hidden;
  cursor: pointer;

  &.selected {
    position: relative;
    border: 0.1875rem solid transparent;
    border-color: var(--orange);
    background-color: var(--white);

    img {
      width: 100%;
      height: 100%;
      transition: opacity 0.5s ease-in-out;
      opacity: 0.4;
    }
  }
  &:hover {
    background-color: var(--white);

    img {
      opacity: 0.6;
    }
  }

  img {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease-in-out;
  }
`;

const ThumbnailModal = styled(Thumbnail)`
  width: 100%;
`;

export default function Gallery() {
  const [imgPosition, setImgPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowWidth();

  const previousImg = () => {
    setImgPosition((positionState) =>
      positionState === 0 ? 3 : positionState - 1
    );
  };

  const nextImg = () => {
    setImgPosition((positionState) =>
      positionState >= 3 ? 0 : positionState + 1
    );
  };

  const setImgFocus = (position) => {
    setImgPosition(position);
  };

  const {
    productImages: { images, thumbnails },
  } = data[0];

  if ({ isOpen } && windowSize.width > 1150) {
    return (
      <GalleryStyles>
        <CarouselContainer className={`heroImg-${imgPosition} `}>
          {images?.map(({ src, key }) => (
            <div onClick={() => setIsOpen(true)} key={`container-${key}`}>
              <Image
                src={src}
                key={key}
                alt={key}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          ))}
        </CarouselContainer>

        <GalleryPreview>
          {thumbnails?.map(({ src, key }, index) => (
            <Thumbnail
              key={key}
              className={`${index === imgPosition ? 'selected' : ''} `}
              onClick={() => setImgFocus(index)}
            >
              <Image src={src} width={88} height={88} alt={key} />
            </Thumbnail>
          ))}
        </GalleryPreview>

        <ThemeProvider theme={galleryModal}>
          <Modal
            onClose={() => setIsOpen(false)}
            open={isOpen}
            theme={galleryModal}
          >
            <GalleryStyles>
              <button className='closeIcon' onClick={() => setIsOpen(false)}>
                <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                    fill='#FFFFFF'
                    fillRule='evenodd'
                  />
                </svg>
              </button>
              <CarouselContainerModal className={`heroImg-${imgPosition} `}>
                {images?.map(({ src, key }) => (
                  <div
                    className='heroContainer'
                    // onClick={nextImg}
                    key={`container-${key}`}
                  >
                    <Image
                      src={src}
                      width={494}
                      height={494}
                      alt={key}
                      priority={true}
                    />
                  </div>
                ))}
              </CarouselContainerModal>
              <ButtonPreviousModal onClick={previousImg}>
                <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11 1 3 9l8 8'
                    stroke='#1D2026'
                    strokeWidth='3'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </ButtonPreviousModal>
              <ButtonNextModal onClick={nextImg}>
                <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m2 1 8 8-8 8'
                    stroke='#1D2026'
                    strokeWidth='3'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </ButtonNextModal>

              <GalleryPreviewModal>
                {thumbnails?.map(({ src, key }, index) => (
                  <ThumbnailModal
                    key={key}
                    className={`${index === imgPosition ? 'selected' : ''} `}
                    onClick={() => setImgFocus(index)}
                  >
                    <Image src={src} width={88} height={88} alt={key} />
                  </ThumbnailModal>
                ))}
              </GalleryPreviewModal>
            </GalleryStyles>
          </Modal>
        </ThemeProvider>
      </GalleryStyles>
    );
  }

  return (
    <GalleryStyles>
      <CarouselContainer className={`heroImg-${imgPosition} `}>
        {images?.map(({ src, key }) => (
          <div key={`container-${key}`}>
            <Image
              src={src}
              key={key}
              alt={key}
              priority={true}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        ))}
      </CarouselContainer>
      <ButtonPrevious className='arrowButtons' onClick={previousImg}>
        <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M11 1 3 9l8 8'
            stroke='#1D2026'
            strokeWidth='3'
            fill='none'
            fillRule='evenodd'
          />
        </svg>
      </ButtonPrevious>
      <ButtonNext className='arrowButtons' onClick={nextImg}>
        <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='m2 1 8 8-8 8'
            stroke='#1D2026'
            strokeWidth='3'
            fill='none'
            fillRule='evenodd'
          />
        </svg>
      </ButtonNext>
      <GalleryPreview>
        {thumbnails?.map(({ src, key }, index) => (
          <Thumbnail
            key={key}
            className={`${index === imgPosition ? 'selected' : ''} `}
            onClick={() => setImgFocus(index)}
          >
            <Image src={src} width={88} height={88} alt={key} />
          </Thumbnail>
        ))}
      </GalleryPreview>
    </GalleryStyles>
  );
}
