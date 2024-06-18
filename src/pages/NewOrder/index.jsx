import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaRegEdit } from "react-icons/fa";
import qrCodeImage from "../../assets/qrcode.png";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SimpleCard } from "../../components/SimpleCard";
import { PaymentSelection } from "../../components/PaymentSelection";
import { Footer } from "../../components/Footer";
import { notify } from "../../components/Notification";

import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

import { Container, ContentWrapper, Form } from "./styles";

export function NewOrder() {
  const { cart, handleRemoveFromCart, handleEmptyCart } = useCart();
  const [ amount, setAmount ] = useState(0);
  const [ paymentMethod, setPaymentMethod ] = useState("pix");
  const [ showPaymentSection, setShowPaymentSection ] = useState(false);
  const [ isAnimate, setIsAnimate ] = useState(false);

  const navigate = useNavigate();

  function handlePaymentMethod(event) {
    setPaymentMethod(event.target.value);
    setIsAnimate(true);
  };

  function handleSelectPaymentMethod(event) {
    setShowPaymentSection(prevState => !prevState)
    setIsAnimate(false);
  };

  async function handleNewOrder() {
    try {
      const orderData = {
        amount: amount,
        cart_items: cart,
        payment_method: paymentMethod,
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
    setAmount(cart.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [cart]);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main>
          <section className={showPaymentSection ? "hide" : ""}>
            <h1>Meu pedido</h1>

            <div>
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
            </div>

            <Button 
              title="Avançar" 
              onClick={handleSelectPaymentMethod}
              className="showPaymentMethodButton"
            />
          </section>

          <section className={!showPaymentSection ? "hide" : ""}>
            <Button 
              variant="secondary" 
              icon={FaRegEdit}
              onClick={handleSelectPaymentMethod} 
            />

            <h1>Pagamento</h1>

            <PaymentSelection onClick={handlePaymentMethod}>
              { paymentMethod === "pix" ? (
                <div className={`qrcode ${isAnimate ? "animate" : ""}`}>
                  <img src={qrCodeImage} alt="QR Code para pagamento PIX." />

                  <Button 
                    title="Fechar pedido"
                    onClick={handleNewOrder}
                    className="pixButton"
                  />
                </div>
              ) : (
                <Form className={isAnimate ? "animate" : ""}>
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
              )}
            </PaymentSelection>
          </section>
        </main>
        <Footer />
      </ContentWrapper>
    </Container>
  );
};