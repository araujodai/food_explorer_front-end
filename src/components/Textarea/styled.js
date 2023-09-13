import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.6rem;

 > label {
  font: 400 1.6rem/100% "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
 }

 > textarea {
  background: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border-radius: 8px;
  resize: none;

  width: 100%;
  height: 17.8rem;
  padding: 1.4rem;

  font: 400 1.6rem/100% "Roboto", sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
 }
`;