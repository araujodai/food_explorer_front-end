import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function EmptyState({ icon: Icon, title, message, actionRoute, actionLabel, ...rest }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(actionRoute)
  };

  return (
    <Container {...rest}>
      <h3>
        {Icon && <Icon />} Nenhum resultado encontrado
      </h3>

      { message &&
        <p>{message}</p>
      }

      { actionRoute && 
        <Button title={actionLabel} onClick={handleNavigate} />
      }
    </Container>
  )
};