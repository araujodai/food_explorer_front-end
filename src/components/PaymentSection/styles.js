import styled from "styled-components";

export const Container = styled.section`
  width: minmax(100%, 3rem);

  > h1 {
    font: 500 3.2rem/140% "Poppins", sans-serif;
    margin-bottom: 3.2rem;
  }

  .inputWrapper {
    border: .6px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-radius: 8px 8px 0px 0px;

    label {
      display: inline-flex;
      padding-block: 3.2rem;
      width: 50%;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-bottom: 0.6px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      position: relative;

      &:first-child {
        border-top-left-radius: 8px;
      }

      + label {
        border-top-right-radius: 8px;
        border-left: 0.6px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      }

      &:has(input:checked) {
        background: ${({ theme }) => theme.COLORS.DARK_800};
      }

      input {
        all: unset;
        position: absolute;
        inset: 0;
        cursor: pointer;
      }
    }
  }

  .content {
    border: .6px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-top: none;
    border-radius: 0 0 5px 5px;
  }
`;
