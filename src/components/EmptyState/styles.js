import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  text-align: center;
  padding-block: 3rem;

  > h3 {
    font-size: 2rem;
  }

  > p {
    font-size: 1.4rem;
  }

  button {
    margin-top: 1.4rem;
    width: fit-content;
  }
`;