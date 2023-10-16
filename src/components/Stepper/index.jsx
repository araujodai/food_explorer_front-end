import { useState } from "react";
import { useCart } from "../../hooks/cart";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./styles";

export function Stepper() {
  const { amount, handleAddUnit, handleRemoveUnit } = useCart();

  return (
    <Container>
      <Button 
        variant="secondary" 
        icon={AiOutlineMinus} 
        size="24px" 
        onClick={handleRemoveUnit}
      />

      <span>
        {String(amount).padStart(2, "0")}
      </span>

      <Button 
        variant="secondary" 
        icon={AiOutlinePlus} 
        size="24px" 
        onClick={handleAddUnit}
      />
    </Container>
  )
};