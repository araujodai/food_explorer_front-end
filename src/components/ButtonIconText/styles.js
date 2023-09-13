import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: ${({ fontSize }) => fontSize || "1.7rem"};
  font-weight: 500;
  line-height: 140%;

  display: flex;
  align-items: center;
  width: fit-content;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: ${({ size }) => size || "22px"};
  }
`;