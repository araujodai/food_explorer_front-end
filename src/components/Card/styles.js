import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;
  min-height: 29.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 2.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  position: relative;

  > button:first-child {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    svg {
      fill: white;
      width: 24px;
      height: 22px;
    }
  }
  
  > img {
    width: 8.8rem;
    height: 8.8rem;
    object-fit: cover;
    border-radius: 50%;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    align-items: center;

    h2 {
      font: 500 1.4rem/2.4rem "Poppins", sans-serif;
    }
  }

  > .description {
    display: none;
  }

  > span {
    font: 400 1.6rem/1.6rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  > .quantityControl {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > button {
      padding: 0;
      height: 3.2rem;
    }
  }

  @media(min-width: 1024px) {
    width: 30.4rem;
    min-height: 46.2rem; 
    gap: 1.5rem;

    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    > a > h2 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%
    }

    > .description {
      display: initial;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font: 400 1.4rem/160% "Roboto", sans-serif;

      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    > span {
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 160%;
    }

    > .quantityControl {
      flex-direction: row;
      align-items: center;

      > button {
        padding: 1.2rem;
        height: initial;
      }
    }
  }
`;
