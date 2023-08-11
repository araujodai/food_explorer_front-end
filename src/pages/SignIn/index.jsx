import logoIcon from "../../assets/logo.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, BrandWrapper, Form } from "./styles";

export default function SignIn() {
  return (
    <Container>
      <BrandWrapper>
        <img src={logoIcon} alt="Logo" />
        <h1>food explorer</h1>
      </BrandWrapper>

      <Form>

        <Input 
          label="Email" 
          type="email" 
          placeholder="Exemplo: exemplo@email.com"
          id="userEmail"
        />

        <Input 
          label="Senha" 
          type="password" 
          placeholder="No mínimo 6 caracteres"
          id="userPassword"
        />

        <Button title="Entrar" />

        <a href="#">Criar uma conta</a>
      </Form>

    </Container>
  );
}