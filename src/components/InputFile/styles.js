import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > div {
    display: flex;
    gap: 8px;

    padding: 1.2rem 3.2rem;
    align-items: center;
    border-radius: 8px;

    background: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    input {
      display: none;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;