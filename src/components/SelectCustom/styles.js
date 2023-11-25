import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.4rem;
  }
`;

export const customStyles = (icon) => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
    padding: icon ? "6px 6px 6px 24px" : "6px",
    borderRadius: icon ? "5px" : "8px",
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
    fontSize: "14px", 
  }),

  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
    fontSize: "14px",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
});

