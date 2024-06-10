import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MdOutlineWatchLater, MdCheckCircleOutline, MdNoMeals } from "react-icons/md";
import { PiForkKnife } from "react-icons/pi";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { SimpleCard } from "../../components/SimpleCard";
import { PaymentSelection } from "../../components/PaymentSelection";
import { status } from "../../components/SelectCustom";
import { Footer } from "../../components/Footer";
import { notify } from "../../components/Notification";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";

import { Container, ContentWrapper } from "./styles";

export function OrderDetails() {
  const [ data, setData ] = useState(null);
  const [ showPaymentSection, setShowPaymentSection ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  const params = useParams();

  function handleSelectPaymentMethod() {
    setShowPaymentSection(prevState => !prevState)
  };

  function renderOrderStatus(status, situation) {
    const foundItem = situation.find(item => item.value === status);

    const IconMap = {
      pending: <MdOutlineWatchLater />,
      preparing: <MdCheckCircleOutline />,
      delivered: <PiForkKnife />,
      canceled: <MdNoMeals />,
    }

    if (foundItem) {
      return (
        <>
          {IconMap[foundItem.value]}
          <p>{foundItem.description}</p>
        </>
      )
    }
  };

  useEffect(() => {
    setIsLoading(true);

    async function fetchOrderDetails() {
      try {
        const response = await api.get(`/orders/${params.id}`)
        setData(response.data);
        setIsLoading(false);

      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);

        } else {
          notify.error("Não foi possível carregar as informações desse pedido, tente novamente.");
        };
      };
    };

    fetchOrderDetails()
  }, []);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main>
          <Loading isVisible={isLoading} />

          {data && (
            <>
              <section className={showPaymentSection ? "hide" : ""}>
                <h1>Meu pedido</h1>

                <div>
                  {data.order_items && 
                    data.order_items.map(item => (
                      <SimpleCard
                        key={String(item.id)}
                        data={item}
                      />
                    ))
                  }

                  <span>Total: R$ {data.total_price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>

                <Button title="Status" onClick={handleSelectPaymentMethod}/>
              </section>

              <section className={!showPaymentSection ? "hide" : ""}>
                <Button 
                  variant="secondary" 
                  title="voltar" 
                  icon={MdKeyboardArrowLeft} 
                  onClick={handleSelectPaymentMethod} 
                />

                <h1>Pagamento</h1>

                <PaymentSelection>
                  <div className="orderStatus">
                    {renderOrderStatus(data.status, status)}
                  </div>
                </PaymentSelection>
              </section>
            </>
          )}
        </main>
        <Footer />
      </ContentWrapper>
    </Container>
  );
};