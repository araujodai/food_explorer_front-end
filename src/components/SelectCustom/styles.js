import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    marginTop: "16px",
    backgroundColor: theme.COLORS.DARK_800,
    padding: "6px",
    borderRadius: "8px",
    borderColor: state.isFocused ? theme.COLORS.LIGHT_100 : "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: "none",
    outline: "none",
    '&:hover': {
      outline: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
    color: theme.COLORS.LIGHT_300,
    borderColor: state.isFocused ? theme.COLORS.LIGHT_100 : "transparent",
    borderWidth: 1,
    borderStyle: "solid", 
    padding: "10px 16px",
    '&:active': {
      backgroundColor: theme.COLORS.DARK_800,
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: theme.COLORS.LIGHT_300,
    
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};

