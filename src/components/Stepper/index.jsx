import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./styles";

export function Stepper({ quantity, setQuantity }) {
  
  function handleAddUnit() {
    if (quantity < 10) {
      setQuantity(prevState => prevState + 1);
    } else {
      alert("Você atingiu o máximo permitido.");
    }
  };

 function handleRemoveUnit() {
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1);
    } else {
      alert("A quantidade mínima é de 01 unidade.");
    }
  };  

  return (
    <Container>
      <Button 
        variant="secondary" 
        icon={AiOutlineMinus} 
        size="24px" 
        onClick={handleRemoveUnit}
      />

      <span>
        {String(quantity).padStart(2, "0")}
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