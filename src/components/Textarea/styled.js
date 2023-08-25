import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;

 > label {
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
 }

 > textarea {
  background: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 8px;
  resize: none;

  width: 100%;
  height: 17.8rem;
  padding: 1.4rem;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
 }
`;

export const Textarea = styled.textarea`
  background: ${({ theme }) => theme.COLORS.DARK_800};
  color: white;
`;