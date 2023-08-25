import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font: 500 2.2rem/140% "Poppins", sans-serif;

  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;