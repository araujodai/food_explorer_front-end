import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  /* padding: 1.2rem 3.2rem; */
  padding: 1.2rem;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

  &:disabled {
    opacity: 0.5;

    &:hover {
      filter: none;
      cursor: not-allowed;
    }
  }

  &.createAndEditDish {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  &.delete {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;