import logoIcon from "../../assets/logo.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, BrandWrapper, Form } from "./styles";

export default function SignUp() {
  return (
    <Container>
      <BrandWrapper>
        <img src={logoIcon} alt="Logo" />
        <h1>food explorer</h1>
      </BrandWrapper>

      <Form>
        <Input 
          label="Seu nome" 
          type="text" 
          placeholder="Exemplo: Maria da Silva"
          id="userName"
        />

        <Input 
          label="Email" 
          type="userEmail" 
          placeholder="Exemplo: exemplo@email.com"
          id="userEmail"
        />

        <Input 
          label="Senha" 
          type="userPassword" 
          placeholder="No mínimo 6 caracteres"
          id="userPassword"
        />

        <Button title="Criar conta" />

        <a href="#">Já tenho uma conta</a>
      </Form>

    </Container>
  );
}