import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

import { Button } from "../Button";

import { Container, QuantityControl } from "./styles";

export function Card({ image, name, price }) {
  return (
    <Container>
      <button>
        <FaRegHeart />
      </button>

      <img src={image} />

      <h2>{name}</h2>
      <p>R$ {price}</p>

      <QuantityControl>
        <button>
          <AiOutlineMinus size={24} />
        </button>
        <span>01</span>
        <button>
          <AiOutlinePlus size={24} />
        </button>
      </QuantityControl>
      
      <Button title="incluir" />
    </Container>
  )
};