import logoIconFooter from "../../assets/logo_footer.svg";

import { Container, BrandWrapper } from "./styles";

export function Footer() {
  return (
    <Container>
      <BrandWrapper>
        <img src={logoIconFooter} alt="Logo" />
        <span>food explorer</span>
      </BrandWrapper>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
};