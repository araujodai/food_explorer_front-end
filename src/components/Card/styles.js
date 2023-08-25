import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  flex: 0 0 auto;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  
  padding: 2.4rem;
  border: ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  text-align: center;
  position: relative;
  z-index: -2;

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
  margin-bottom: 1.2rem;
 }

 > h2 {
  font: 500 1.4rem/2.4rem "Poppins", sans-serif;
  margin-bottom: 1.2rem;
 }

 > p {
  font: 400 1.6rem/1.6rem "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  margin-bottom: 1.2rem;
 }

 > button:last-child {
  padding: 0;
  height: 3.2rem;
 }
`;

export const QuantityControl = styled.div`
 padding-block: 4px;
 font: 400 1.6rem/1.6rem "Roboto", sans-serif;

 display: flex;
 align-items: center;
 justify-content: center;
 gap: 1.4rem;

 margin-bottom: 1.6rem;

 > button {
  display: flex;

  svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
 }
`;