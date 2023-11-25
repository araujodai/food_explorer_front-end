import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas:
  "header"
  "contentWrapper";
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  grid-area: contentWrapper;
  width: 100%;
  
  display: grid;
  grid-template-rows: auto min-content;
  grid-template-areas: 
  "main"
  "footer";
  overflow-x: overlay;

  > main {
    grid-area: main;
    padding-block: 5.6rem 2rem;

    h1 {
      font: 500 3.2rem/140% "Poppins", sans-serif;
      margin-bottom: 2.4rem;
    }

    > .ordersWrapper {
      .pending {
        color: ${({ theme }) => theme.COLORS.TOMATO_300};
      }

      .preparing {
        color: ${({ theme }) => theme.COLORS.CARROT_100};
      }

      .delivered {
        color: ${({ theme }) => theme.COLORS.MINT_100};
      }

      .canceled {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    @media (max-width: 998px) {
      padding-inline: 3.5rem;
    }

    @media(min-width: 1024px) {
      padding-block: 3.5rem;

      > h1 {
        margin-bottom: 3.5rem;
      }

      > .ordersWrapper {
        border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: 8px 8px 0 0;
      }
    }
  }

  > footer {
    grid-area: footer;
  }
`;

export const OrderCard = styled.div`
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;
  padding: 2.4rem;
  margin-bottom: 2.4rem;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > strong {
    margin-right: 10px;
    font-weight: 400;
  }

  > p {
    margin-block: 1.6rem;
    line-height: 1.9rem;
    
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media(min-width: 1024px) {
    display: grid;
    grid-template-rows: 80px;
    grid-template-columns: 2fr 1.5fr 5fr 1.5fr;
    /* height: 80px; */
    display: none;

    border-radius: 0;
    padding: 0;
    margin-bottom: 0;
    border-bottom-width: 1px;

    > strong {
      grid-row: 1;
      grid-column: 2;
      border: 1px solid red;
      align-self: center;
      padding-inline: 2.4rem;
    }

    > span {
      grid-row: 1;
      grid-column: 4;
      border: 1px solid green;
      align-self: center;
      padding-inline: 2.4rem;
    }

    > p {
      grid-row: 1;
      grid-column: 3;
      border: 1px solid white;
      align-self: center;
      padding-inline: 2.4rem;
    }

    > div {
      grid-row: 1;
      grid-column: 1;
      border: 1px solid orange;
      align-self: center;
      margin-inline: 2.4rem;
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  display: none;
  font-size: 1.4rem;

  > thead tr th {
    padding: 2.1rem 2.4rem;
    text-align: start;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    + th {
      border-left: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
  }

  > tbody tr {
    + tr {
      border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    > td {
      padding: 1.6rem 2.4rem;

      + td {
        border-left: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
      }
    }
  }

  @media(min-width: 1024px) {
    display: inline-table;
  }

`;