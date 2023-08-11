import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 4.7rem;
  padding-inline: 2rem;
  min-height: 100vh;

  display: grid;
  align-content: center;
`;

export const BrandWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  > h1 {
    font-size: 3.7rem;
  }

  > img {
    width: 4.3rem;
    height: 4.3rem;
  }
`;

export const Form = styled.form`
  margin: 7.3rem 0 3.2rem 0;
  text-align: center;

  > div, button {
    margin-bottom: 3.2rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;