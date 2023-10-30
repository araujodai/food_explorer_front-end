import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 8px;

  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font: 400 1.6rem/100% "Roboto", sans-serif;
  padding: 1rem 1.6rem;

  border: ${({ theme, isnew }) => isnew && `1px dashed ${theme.COLORS.LIGHT_500}`};
  border-radius: 8px;

  > span {
    display: flex;
    padding-block: 1px;
  }

  > input {
    background: transparent;
    font: 400 1.6rem/100% "Roboto", sans-serif;
    width: 6.8rem;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    display: flex;
    align-items: center;

    svg {
      color: white;
      font-size: 1.6rem;
    }
  }
`;