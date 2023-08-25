import styled from "styled-components";

export const Container = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};

  > svg {
    width: 100%;
    height: auto;

    path {
      fill: white;
    }
  }
`;