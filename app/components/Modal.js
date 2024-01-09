import styled from 'styled-components';

import { useCallback, useEffect, useRef } from 'react';

const ModalStyles = styled.dialog`
  border-width: 0;
  padding: ${(props) => props.theme.padding};
  background: var(--white);
  max-height: ${(props) => props.theme.maxHeight};
  max-width: ${(props) => props.theme.maxWidth};

  margin: ${(props) => props.theme.margin};
  background: ${(props) => props.theme.background};

  .modalContainer {
    height: ${(props) => props.theme.height};
    width: ${(props) => props.theme.width};
  }

  &[open] {
    animation: show 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  &.closing {
    animation: hide 450ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  &::backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(0.1875rem);
    animation: none;
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes hide {
    from {
      opacity: 1;
      transform: translateX(0%);
    }
    to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

export default function Modal({ open, onClose, children }) {
  const modalRef = useRef(null);

  const onClick = useCallback(
    ({ target }) => {
      const { current: el } = modalRef;
      if (target === el) {
        onClose();
      }
    },
    [onClose]
  );

  const onAnimEnd = useCallback(() => {
    const { current: el } = modalRef;
    if (!open) {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) {
      el.showModal();
    }
  }, [open]);

  return (
    <ModalStyles
      ref={modalRef}
      className={`modal ${!open ? 'closing' : ''}`}
      onClose={onClose}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
    >
      <div className='modalContainer'>{children}</div>
    </ModalStyles>
  );
}
