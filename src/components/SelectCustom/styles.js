import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  /* display: ${({ disabled }) => disabled && disabled === true ? 'inline-flex' : 'none'}; */
  /* display: inline-flex; */

  > span {
    display: inline-flex;
    gap: 4px;
  }

  svg {
    &.pending > path {
      color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }

    &.preparing > path {
      color: ${({ theme }) => theme.COLORS.CARROT_100};
    }

    &.delivered > path {
      color: ${({ theme }) => theme.COLORS.MINT_100};
    }

    &.canceled > path {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  /* ${({ disabled }) => !disabled && `
    display: initial;
  `} */
`;

export const customStyles = (icon) => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
    minWidth: '165px',
    // padding: icon ? "6px 6px 6px 24px" : "6px",
    padding: icon ? "6px 6px 6px 6px" : "6px",
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
    display: 'flex',
    gap: '6px',
  }),

  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.COLORS.DARK_800,
    fontSize: "14px",
    borderColor: theme.COLORS.DARK_100,
    borderWidth: 1,
    borderStyle: "solid",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
});

