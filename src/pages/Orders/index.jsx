import { useState } from 'react';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SelectCustom, status } from "../../components/SelectCustom";

import { Container, ContentWrapper, OrderCard, Table } from "./styles";

export function Orders() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [ colorDot, setColorDot ] = useState("");

  function handleStatusChange(selectedOption) {
    setSelectedStatus(selectedOption);
    console.log(selectedOption)
    setColorDot(selectedOption)
  };

  return (
    <Container>
      <Header />

      <ContentWrapper>
      <main className="contentMaxWidthWrapper">
        <h1>Pedidos</h1>

        <div className="ordersWrapper">
            <OrderCard>
              <strong>000004</strong>
              <span>20/05 às 18h00</span>
              <p>1x Salada Radish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá, 1x Salada Radish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá</p>

              <SelectCustom 
                options={status}
                value={selectedStatus}
                onChange={handleStatusChange}
                name="orderStatus"
                icon
                className={colorDot}
              />
            </OrderCard>

            <Table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <SelectCustom 
                      options={status}
                      value={selectedStatus}
                      onChange={handleStatusChange}
                      id="orderStatus"
                      icon
                      className={colorDot}
                    />
                  </td>
                  <td>000004</td>
                  <td>1x Salada Radish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
                </tr>

                <tr>
                  <td>
                    <SelectCustom 
                      options={status}
                      value={selectedStatus}
                      onChange={handleStatusChange}
                      id="orderStatus"
                      icon
                      className={colorDot}
                    />
                  </td>
                  <td>000004</td>
                  <td>1x Salada Radish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá</td>
                  <td>20/05 às 23h56</td>
                </tr>
              </tbody>
            </Table>

        </div>

        

      </main>

      <Footer />
      </ContentWrapper>
    </Container>
  );
};