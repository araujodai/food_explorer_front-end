import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  height: 32px;

  > span {
    font: 400 1.6rem/1.6rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;