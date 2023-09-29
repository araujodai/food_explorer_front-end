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

  > main {
    width: min(100%, 1120px);
    margin: 0 auto;

    .bannerWrapper {
      display: flex;
      padding-top: 2.9rem;
      position: relative;

      margin: 1.5rem 1.6rem 6.2rem 3.6rem;

      .bannerText {
        padding: 3.6rem 0 2.2rem 0.5rem;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
        display: flex;
        flex-direction: column;
        align-items: end;
        

        h2 {
          font: 600 1.8rem/140% "Poppins", sans-serif;
          width: 21.5rem;
          z-index: 1;
        }

        p {
          font: 400 1.2rem/140% "Poppins", sans-serif;
          width: 21.5rem;
          z-index: 1;
        }
      }
      
      > img {
        width: auto;
        position: absolute;
        bottom: 0;
        left: -30px;
        z-index: 10;
      }
    }


    @media(min-width: 1024px) {
      /* padding-inline: 2rem; */

      .bannerWrapper {
        margin: 4rem 0 5rem 0;
        padding-top: 13.2rem;
        

        img {
          top: 0;
          left: -50px;
          width: min(100%, 63.2rem);
        }

        .bannerText {
          padding: 8.7rem 10rem;
          overflow-y: hidden;
          
          h2 {
            font-size: 4rem;
            font-weight: 500;
            width: fit-content;
          }

          p {
            font: 400 1.6rem/100% "Roboto", sans-serif;
            width: fit-content;
          }
        }
      }
    }
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