import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function IngredientTag({ value, isNew = false, onClick, ...rest }) {
  return (
    <Container $isNew={isNew}>
      {
        isNew ? (
          <input type="text" value={value} placeholder="Adicionar" {...rest} />
        ) : (
          <span>{value}</span>
        )
      }

      <button
        type={isNew ? "submit" : "button"}
        onClick={onClick}
        disabled={!value}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
};