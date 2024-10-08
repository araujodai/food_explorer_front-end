import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas:
  "header"
  "contentWrapper";
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  grid-area: contentWrapper;
  
  display: grid;
  grid-template-rows: auto min-content;
  grid-template-columns: 100%;
  grid-template-areas: 
  "main"
  "footer";
  overflow: overlay;

  > main {
    grid-area: main;
    justify-self: center;

    @media(max-width: 719px) {
      padding-inline: 0;
    }

    > .noAction {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > footer {
    grid-area: footer;
    margin-top: 4rem;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 1.5rem 1.6rem 6.2rem 0.6rem;

  > img {
    width: 50%;
    height: auto;
    min-height: 12rem;

    + .desktop {
      display: none;
    }
  }

  > div {
    position: absolute;
    left: 40%;
    top: 50%;
    transform: translateY(-20%);
    font-family: "Poppins", sans-serif;

    h2 {
      font-size: clamp(18px, calc(10px + 2vw), 40px);
      font-weight: 600;
      line-height: 140%;
    }

    p {
      font-size: clamp(12px, calc(4px + 2vw), 16px);
      font-weight: 400;
      line-height: 140%;
    }
  }

  &::before {
    content: "";
    width: 95%;
    height: 81%;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  @media (min-width: 720px) {
    margin-right: 0;

    > img {
      position: relative;
      left: -1.8rem;
    }

    &::before {
      width: 98%;
    }
  }

  @media (min-width: 900px) {
    margin: 1.5rem 0 6.3rem 0;

    > img.mobile {
      display: none;
    }

    > img.desktop  {
      display: initial;
      max-width: 63.2rem;
    }

    > div {
      transform: translateY(2%);

      h2 {
        font-weight: 500;
      }
    }

    &::before {
      width: 100%;
      height: 70%;
    }
  }

  @media (min-width: 1180px) {
    > img.desktop {
      left: -5rem;
    }

    > div {
      left: 45%;
    }
  }
`;