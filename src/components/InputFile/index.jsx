import { FiUpload } from "react-icons/fi";

import { Container } from "./styles";

export function InputFile({ id, ...rest }) {
  return (
    <Container htmlFor={id}>
      Imagem do prato
      <div>
        <FiUpload size={24} />
        <p>Selecione a imagem</p>
        <input type="file" id={id} {...rest} />
      </div>
    </Container>
  )
};