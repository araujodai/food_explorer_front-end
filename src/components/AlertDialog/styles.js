import styled, { keyframes } from "styled-components";

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  .alertDialogContent {
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 500px;
    max-height: 85vh;
    padding: 25px;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

    h2 {
      margin: 0;
      font-size: 17px;
      font-weight: 500;
    }

    p {
      margin-bottom: 20px;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 15px;
      line-height: 1.5;
    }

    .buttonsWrapper {
      display: flex;
      gap: 2.5rem;
      justify-content: flex-end;

      button {
        display: inline-flex;
        width: fit-content;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        padding: 0 15px;
        font-size: 15px;
        line-height: 1;
        font-weight: 500;
        height: 35px;

        &.cancel {
          background: transparent;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
        }
  
        &.action {
          background: ${({ theme }) => theme.COLORS.TOMATO_400};
        }
      }
    }
  }
`;
