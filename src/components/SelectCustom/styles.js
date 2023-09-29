import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  > label {
    font: 400 1.6rem/100% "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1.3rem;
  
  border: none;
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font: 400 1.4rem/160% "Roboto", sans-serif;

  z-index: 1;

  > option {
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SelectWrapper = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_800};
  width: 100%;
  border-radius: 8px;
  margin-top: 1.6rem;

  display: flex;
  gap: 1.4rem;
  position: relative;

  > svg {
    position: absolute;
    right: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
