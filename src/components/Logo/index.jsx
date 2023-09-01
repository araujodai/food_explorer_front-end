import logoIcon from "../../assets/logo.svg";

import { Container } from "./styles";

export function Logo({ isAdmin = false, ...rest }) {
  return (
    <Container {...rest}>
      <img src={logoIcon} alt="Logo" />
      <h1>food explorer</h1>
      {
        isAdmin &&
        <span>admin</span>
      }
    </Container>
  )
};