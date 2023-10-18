import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 2.4rem 2.8rem;

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid green; */
    

    margin-top: 3.2rem;

    .mobileOrderButton {
      position: relative;

      > span {
        position: absolute;
        top: -2px;
        right: -3px;

        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        font-size: 1.4rem;
        line-height: 2.4rem
      }
    }

    .searchBar {
      position: relative;
      
    }

    .searchResultList {
      position: absolute;
      top: 100%;
      left: 0;
      
    }

    @media(min-width: 1024px) {
      margin: 0;
      
      .mobileOrderButton {
        display: none;
      }
    }

    /* @media (min-width: 1180px) {
      
      margin: 0 auto;
      width: 1120px;
    } */
  }

  @media (min-width: 720px) {
    padding-inline: 3rem;
  }

  @media (min-width: 998px) {
    padding-inline: 4rem;
  }

  /* @media (min-width: 1180px) {
    padding-inline: 0;
  } */

  @media (min-width: 1400px) {
    padding-inline: 12.3rem;
  }
`;

export const DesktopMenu = styled.div`
  display: none;

  @media(min-width: 1024px) {
    display: flex;
    align-items: center;
    flex: content;
    gap: 3.2rem;
    margin-left: 3.2rem;

    > button:nth-child(2) {
      max-width: 21.6rem;
    }
  }
`;