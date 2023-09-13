import { FiUpload } from "react-icons/fi";

import { Container } from "./styles";

export function InputFile({ id, title, ...rest }) {
  return (
    <Container htmlFor={id}>
      Imagem do prato
      <div>
        <FiUpload size={24} />
        <p>{title}</p>
        <input type="file" id={id} {...rest} />
      </div>
    </Container>
  )
};