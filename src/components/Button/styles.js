import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: ${({ size }) => size || "22px"};
  }
`;

export const PrimaryButton = styled(Container)`
  width: 100%;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  line-height: 2.4rem;
  gap: 5px;

  &.light {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  &.delete {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;

export const SecondaryButton = styled(Container)`
  width: fit-content;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: ${({ fontSize }) => fontSize || "1.7rem"};
  line-height: 140%;
`;

