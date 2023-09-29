import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Button } from "../Button";
import { Container } from "./styles";

export function Stepper() {
  return (
    <Container>
      <Button variant="secondary" icon={AiOutlineMinus} size="24px" />
      <span>01</span>
      <Button variant="secondary" icon={AiOutlinePlus} size="24px" />
    </Container>
  )
};