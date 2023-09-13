import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

import { ButtonIconText } from "../ButtonIconText";
import { Button } from "../Button";

import { Container, QuantityControl } from "./styles";

export function Card({ image, name, price }) {
  return (
    <Container>
      <ButtonIconText icon={FaRegHeart} size="24px"/>

      <img src={image} />

      <h2>{name}</h2>
      <p>R$ {price}</p>

      <QuantityControl>
        <ButtonIconText icon={AiOutlineMinus} size="24px" />

        <span>01</span>

        <ButtonIconText icon={AiOutlinePlus} size="24px" />
      </QuantityControl>
      
      <Button title="incluir" />
    </Container>
  )
};