import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-overlay);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.3s forwards;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: ${({ $hasForm }) => ($hasForm ? 94 : 22.6)}%;
  background: var(--color-primary);
  border-radius: 10px 10px 0 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  transform: translateY(100%);
  animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.3s forwards;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-light-grey);
`;

export const ModalTitle = styled.h2`
  font: var(--font-heading-2);
  color: var(--color-night);
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  color: var(--color-night);
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: calc(100% - 62px);
  overflow-y: auto;
  padding: 29px 24px 56px;
`;
