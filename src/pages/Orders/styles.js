import styled from "styled-components";
import theme from "../../styles/theme";

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
    padding: 5.6rem 3.5rem 2rem; // ver necessidade de aplicar aqui e nao na div dos orders

    h1 {
      font: 500 3.2rem/140% "Poppins", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 2.4rem;
    }
  }

  > footer {
    grid-area: footer;
  }
`;

export const Order = styled.div`
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

  > div {
    position: relative;
    margin-top: 0;

    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-40%);
      left: 15px;

      &.pending {
        background: ${({ theme }) => theme.COLORS.TOMATO_300};
      }

      &.preparing {
        background: ${({ theme }) => theme.COLORS.CARROT_100};
      }

      &.delivered {
        background: ${({ theme }) => theme.COLORS.MINT_100};
      }

      &.canceled {
        background: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
    padding: "5px 5px 5px 20px",
    fontSize: "14px",
    borderRadius: "8px",
    borderColor: state.isFocused ? theme.COLORS.LIGHT_100 : "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: "none",
    outline: "none",
    '&:hover': {
      outline: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
    color: theme.COLORS.LIGHT_300,
    borderColor: state.isFocused ? theme.COLORS.LIGHT_100 : "transparent",
    borderWidth: 1,
    borderStyle: "solid", 
    padding: "10px 16px",
    '&:active': {
      backgroundColor: theme.COLORS.DARK_800,
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: theme.COLORS.LIGHT_300,
    
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
