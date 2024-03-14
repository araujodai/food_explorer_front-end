import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > label {
    display: block;
    margin-bottom: 1.6rem;
    text-align: start;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
    padding: 1.2rem 1.4rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    input {
      width: 100%;
      height: 2.4rem;
      background: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      outline: none;
      line-height: 100%;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }

      &[type="number"]::-webkit-inner-spin-button, 
      [type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;