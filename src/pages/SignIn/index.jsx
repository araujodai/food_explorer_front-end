import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export default function SignIn() {
  return (
    <Container>

      <Logo className="bigSize" />

      <Form>
        <h2>Faça login</h2>

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

        <Button variant="secondary" title="Cria uma conta" fontSize="14px" />
      </Form>

    </Container>
  );
}