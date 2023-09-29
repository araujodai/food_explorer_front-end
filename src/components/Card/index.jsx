import { FaRegHeart } from "react-icons/fa";
import { RxCaretRight } from "react-icons/rx";

import { Button } from "../Button";
import { Stepper } from "../Stepper";

import { Container } from "./styles";

export function Card({ image, name, description, price }) {
  return (
    <Container>
      <Button variant="secondary" icon={FaRegHeart} size="24px"/>

      <img src={image} />

      <a href="https://google.com">
        <h2>{name}</h2>
        <RxCaretRight size={22} />
      </a>

      <p className="description">{description}</p>

      <span>R$ {price}</span>

      <div className="quantityControl">
        <Stepper />
        <Button title="incluir" />
      </div>
    </Container>
  )
};