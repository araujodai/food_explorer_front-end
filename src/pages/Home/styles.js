import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas: 
  "header"
  "contentScrollWrapper";
  overflow: hidden;
`;

export const ContentScrollWrapper = styled.div`
  overflow: overlay;
  grid-area: contentScrollWrapper;
  /* width: 100%;
  overflow-x: hidden; */

  display: grid;
  grid-template-rows: auto min-content;
  grid-template-areas: 
  "main"
  "footer";

  > main {
    grid-area: main;
    overflow-y: overlay;
    overflow-x: auto;
  }

  > footer {
    grid-area: footer; 
  } 
`;

export const BannerWrapper = styled.div`
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  margin: 4.4rem 1.6rem 6.2rem 3.6rem;
  position: relative;
  

  > img {
    width: auto;
    height: 149px; 
    object-fit: cover;
    position: absolute;
    left: -30px; 
    bottom: 0; 
  }
`;

export const BannerContent = styled.div`
  width: 215px;
  padding-left: 5px;
  z-index: 1;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: left; 

  h2 {
    font: 600 1.8rem/140% "Poppins", sans-serif;
  }

  p {
    font: 400 1.2rem/140% "Poppins", sans-serif;
  }
`;