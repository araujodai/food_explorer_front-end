import { useState } from 'react';
import Select from 'react-select';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, ContentWrapper, Order, customStyles } from "./styles";

export function Orders() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [ colorDot, setColorDot ] = useState("");

  const status = [
    { label: "Pendente", value: "pending" },
    { label: "Preparando", value: "preparing" },
    { label: "Entregue", value: "delivered" },
    { label: "Cancelado", value: "canceled" },
  ];

  function handleStatusChange(selectedOption) {
    setSelectedStatus(selectedOption);
    console.log(selectedOption.value)
    setColorDot(selectedOption.value)
  };

  return (
    <Container>
      <Header />

      <ContentWrapper>
      <main className="contentMaxWidthWrapper">
        <h1>Pedidos</h1>

        <div className="ordersWrapper">
            <Order>
              <strong>000004</strong>
              <span>20/05 às 18h00</span>
              <p>1x Salada Radish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá, 1x Salada Radish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá</p>

              <div>
                <Select
                  options={status}
                  isSearchable={false}
                  name="status"
                  styles={customStyles}
                  value={selectedStatus}
                  onChange={handleStatusChange}
                />

                <span className={colorDot}></span>
              </div>
            </Order>

        </div>
      </main>

      <Footer />
      </ContentWrapper>
    </Container>
  );
};