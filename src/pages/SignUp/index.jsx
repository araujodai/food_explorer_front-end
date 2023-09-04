import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonIconText } from "../../components/ButtonIconText";

import { Container, Form } from "./styles";

export default function SignUp() {
  return (
    <Container>

      <Logo className="bigSize" />

      <Form>
        <Input 
          label="Seu nome" 
          type="text" 
          placeholder="Exemplo: Maria da Silva"
          id="userName"
        />

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

        <Button title="Criar conta" />

        <ButtonIconText title="Já tenho uma conta" fontSize="1.4rem"/>
      </Form>

    </Container>
  );
}