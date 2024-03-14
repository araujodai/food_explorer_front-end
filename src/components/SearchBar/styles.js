import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  border: 1px solid transparent;

  > button {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: border 0.3s ease;
  }
`;