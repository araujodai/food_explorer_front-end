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
    margin-top: 5.6rem;
    justify-self: center;

    h1 {
      font: 500 3.2rem/140% "Poppins", sans-serif;

      & + div:not(.noContent) {
        margin-top: 2.4rem;
      }
    }

    .noContent {
      position: relative;
      left: 0;
      top: 50%;
      transform: translateY(-60%);
    }
  }

  > footer {
    grid-area: footer;
    margin-top: 5.6rem;
  }
`;

export const OrderCard = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: min-content auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1.6rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;
  padding: 2.4rem;
  margin-bottom: 2.4rem;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > strong {
    grid-row: 1;
    grid-column: 1;
    font-weight: 400;
  }

  > span {
    grid-row: 1;
    grid-column: 2;
  }

  > p {
    grid-row: 2;
    grid-column: 1 / span 3;

    line-height: 1.9rem;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  > :last-child {
    grid-row: 3;
    grid-column: 1 / span 3;
  }

  &.readOnly {
    grid-template-columns: min-content min-content auto;
    padding: 2rem;

    > span {
      grid-column: 3;
    }

    > :last-child {
      grid-row: 1;
      grid-column: 2;
    }
  }

  @media(min-width: 1024px) {
    display: none;
  }
`;

export const TableWrapper = styled.div`
  display: none;
  margin-top: 3.5rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px 8px 0 0;

  > table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1.4rem;

    thead tr th {
      padding: 2.1rem 2.4rem;
      text-align: start;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

      + th {
        border-left: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
      }
    }

    tbody tr {
      + tr {
        border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
      }

      > td {
        padding: 1.6rem 2.4rem;

        + td {
          border-left: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        }

        span {
          cursor: pointer;

          &:hover {
            filter: brightness(0.9);
          }
        }

        p {
          text-align: justify;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          width: 100%;
        }

        &.detailing {
          width: 100%;
        }

        &:last-child {
          white-space: nowrap;
        }
      }
    }
  }

  @media(min-width: 1024px) {
    display: flex;
  }
`;