import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
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

  &.secondary {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  &.tertiary {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;