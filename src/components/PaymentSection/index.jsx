import { PiCreditCard } from "react-icons/pi";
import { MdOutlinePix } from "react-icons/md";

import { Container } from "./styles";

export function PaymentSection({ children, onClick, data }) {
  return (
    <Container>
      <h1>Pagamento</h1>

      <div className="inputWrapper">
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="pix" 
            data-label="PIX" 
            onClick={onClick}
            defaultChecked={!data || data && data === "pix"}
            disabled={data && data !== "pix"} 
          />
          <MdOutlinePix size={24}/>
          PIX
        </label>

        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="cart" 
            data-label="Crédito" 
            onClick={onClick}
            defaultChecked={data === "cart"}
            disabled={data && data !== "cart"} 
          />
          <PiCreditCard size={24}/>
          Crédito
        </label>
      </div>

      <div className="content">{children}</div>
    </Container>
  );
};