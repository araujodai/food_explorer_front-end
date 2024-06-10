import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { notify } from "../../components/Notification";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn(event) {
    event.preventDefault();

    if (!email || !password) {
      return notify.error("Preencha todos os campos.");
    };
    
    signIn({ email, password });
  };

  function handleCreateAccount() {
    navigate("/register");
  };

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
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          label="Senha" 
          type="password" 
          placeholder="No mínimo 6 caracteres"
          id="userPassword"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          type="submit"
          title="Entrar" 
          onClick={handleSignIn}
        />

        <Button 
          variant="secondary" 
          title="Criar uma conta" 
          fontSize="14px" 
          onClick={handleCreateAccount}
        />
      </Form>

    </Container>
  );
};