import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;

  display: grid;
  align-content: center;
`;

export const Form = styled.form`
  margin: 7.3rem 0 3.2rem;
  text-align: center;

  > div, button {
    margin-bottom: 3.2rem;
  }

  > :last-child {
    margin: 0 auto;
  }
`;