import logoIcon from "../../assets/logo.svg";

import { Container } from "./styles";

export function Logo({ isAdmin = false, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <img src={logoIcon} alt="Logo" />
        <h1>food explorer</h1>
      </div>
      
      {
        isAdmin &&
        <span>admin</span>
      }
    </Container>
  )
};