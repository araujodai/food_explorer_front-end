import imagePlaceholder from "../../assets/menu_item_image_placeholder.svg";
import { api } from "../../services/api";

import { Container } from "./styles";

export function SimpleCard({ data, readOnly = false, title, onClick }) {
  const imageUrl = data && data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder;

  return (
    <Container className={readOnly ? "readOnly" : ""}>
      <img 
        src={imageUrl}
        alt={`Imagem de ${data.name}`} 
      />

      <span>
        {data && data.quantity && `${data.quantity}x`} {data.name}
      </span>

      {
        data && data.quantity &&
        <p>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      }

      {
        !readOnly &&
        <button onClick={onClick}>{title}</button>
      }
      
    </Container>
  )
};