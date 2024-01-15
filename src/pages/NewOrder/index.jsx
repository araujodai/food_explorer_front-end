import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SimpleCard } from "../../components/SimpleCard";
import { PaymentSection } from "../../components/PaymentSection";
import qrCodeImage from "../../assets/qrcode.png";
import { Footer } from "../../components/Footer";

import { useCart } from "../../hooks/order";
import { notify } from "../../components/Notification";

import { Container, ContentWrapper, Form } from "./styles";

export function NewOrder() {
  const { cart, handleRemoveFromCart, handleEmptyCart } = useCart();
  const [ amount, setAmount ] = useState(0);
  const [ paymentMethod, setPaymentMethod ] = useState("pix");
  const [showPaymentSection, setShowPaymentSection] = useState(false);

  const navigate = useNavigate();

  function handlePaymentMethod(event) {
    setPaymentMethod(event.target.value);
  }

  function handleSelectPaymentMethod() {
    setShowPaymentSection(prevState => !prevState)
  };

  async function handleNewOrder() {
    try {
      const orderData = {
        amount: amount,
        cart_items: cart,
      };
  
      await api.post("/orders", orderData);
      handleEmptyCart();
      
      notify.success("Pedido criado com sucesso!");
      navigate("/");
  
    } catch (error) {
      if (error.response) {
        notify.error(error.response.data.message);

      } else {
        notify.error("Não foi possível criar, tente novamente.");
      };
    };
  };

  useEffect(() => {
    setAmount(cart.reduce((total, item) => total + item.price, 0));
  }, [cart]);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main className="contentMaxWidthWrapper">
          <section className={`orderDetails ${showPaymentSection ? "hide" : ""}`}> 
            <h1>Meu pedido</h1>

              { cart && 
                cart.map(item => (
                  <SimpleCard 
                    key={String(item.id)} 
                    data={item} 
                    title="Excluir" 
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                ))
              }

            <span>{`Total: R$ ${amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</span>

            <Button title="Avançar" onClick={handleSelectPaymentMethod}/>
          </section>

          <div className={`paymentWrapper ${showPaymentSection ? "show" : ""}`}>
            <Button 
              variant="secondary" 
              title="voltar" 
              icon={MdKeyboardArrowLeft} 
              onClick={handleSelectPaymentMethod} 
            />

            <PaymentSection onClick={handlePaymentMethod}>
                { paymentMethod === "pix" &&
                  <div className="qrcode">
                    <img src={qrCodeImage} alt="QR Code para pagamento PIX." />
                  </div>
                }

                { paymentMethod === "cart" &&
                  <Form>
                    <Input 
                      label="Número do Cartão"
                      placeholder="0000 0000 0000 0000"
                      name="cardNumber"
                      type="number"
                    />

                    <Input 
                      label="Validade"
                      placeholder="MM/AA"
                      name="cartExpiration"
                      type="number"
                    />

                    <Input 
                      label="CVV"
                      placeholder="000"
                      name="cartVerificationCode"
                      type="number"
                    />

                    <Button 
                      title="Finalizar pagamento"
                      className="finalize"
                    />
                  </Form>
                }
            </PaymentSection>

            { paymentMethod === "pix" &&
              <Button 
                title="Fechar pedido"
                onClick={handleNewOrder}
              />
            }
          </div>
        </main>
        <Footer />
      </ContentWrapper>
    </Container>
  );
};