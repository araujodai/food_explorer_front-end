import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { notify } from "../../components/Notification";

import { Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return notify.error("Preencha todos os campos");
    };

    if (password && password.length < 6) {
      return notify.error("Crie uma senha com o mínimo de 6 caracteres.");
    };

    api.post("/users", { name, email, password })
      .then(() => {
        notify.success("Usuário cadastrado com sucesso.");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          notify.error(error.response.data.message);

        } else {
          notify.error("Não foi possível cadastrar este usuário.");
        };
      })
  };

  return (
    <Container>

      <Logo className="bigSize" />

      <Form>
        <h2>Crie sua conta</h2>

        <Input 
          label="Seu nome" 
          type="text" 
          placeholder="Exemplo: Maria da Silva"
          id="userName"
          onChange={e => setName(e.target.value)}
        />

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
          title="Criar conta" 
          onClick={handleSignUp} 
        />

        <Button 
          variant="secondary" 
          title="Já tenho uma conta" 
          fontSize="1.4rem"
          onClick={() => navigate("/")}
        />
      </Form>

    </Container>
  );
}