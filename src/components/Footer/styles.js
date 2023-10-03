import styled from "styled-components";

export const Container = styled.footer`
  padding: 2.4rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  gap: 8px;

  > p {
    font: 400 1.2rem "DM Sans", sans-serif;
    text-align: end;
  }

  @media (min-width: 720px) {
      padding-inline: 3rem;
    }

  @media (min-width: 998px) {
    padding-inline: 4rem;
  }

  @media (min-width: 1400px) {
    padding-inline: 12.3rem;
  }
`;

export const BrandWrapper = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 2px;

  white-space: nowrap;

  > span {
    font: 700 1.4rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  > img {
    width: 2.2rem;
    height: 1.8rem;
  }
  `;