import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  > button {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;