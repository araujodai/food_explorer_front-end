import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  line-height: 100%;

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

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      transition: border 0.3s ease;
    }

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

      &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    }
  }
`;