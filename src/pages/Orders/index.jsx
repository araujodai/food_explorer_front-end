import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SelectCustom, status } from "../../components/SelectCustom";
import { notify } from "../../components/Notification";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, ContentWrapper, OrderCard, Table } from "./styles";

export function Orders() {
  const [ orders, setOrders ] = useState([]);
  const [ orderStatus, setOrderStatus ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const navigate = useNavigate();

  const { user } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  async function handleStatusChange(selectedOption, orderId) {
    const confirm = window.confirm("Deseja atualizar o status desse pedido?");

    if (confirm) {
      try {
        await api.put("/orders", {id: orderId, status: selectedOption});
        notify.success("Pedido atualizado com sucesso.");
        setOrderStatus(selectedOption)

      } catch (error) {
        notify.error("Não foi possível atualizar o pedido, tente novamente.");
      };
    };
  };

  function handleOrderDetails(orderId) {
    navigate(`/orders/${orderId}`);
  };

  useEffect(() => {
    setIsLoading(true);

    async function fetchOrders() {
      try {
        const response = await api.get("orders")
        setOrders(response.data)

        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 3000);
        setIsLoading(false);

      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);
  
        } else {
          notify.error("Não foi possível carregar os pedidos, tente novamente.");
        };
      };
    };

    fetchOrders();
  }, [orderStatus]);

  return (
    <Container>
      <Header />

      {/* {isLoading && <Loading />} */}
      <Loading isVisible={isLoading} />

      <ContentWrapper>
        <main className="contentMaxWidthWrapper">
          <h1>Pedidos</h1>

          {
            orders &&
            orders.map(order => (
              <OrderCard 
                key={String(order.id)} 
                className={!isAdmin ? "readOnly" : ""}
                onClick={() => handleOrderDetails(order.id)}
              >
                <strong>{String(order.id).padStart(6, '0')}</strong>
                
                <span>{moment(order.created_at).subtract(3, 'hours').format('DD/MM [às] HH:mm')}</span>
                <p>
                  {
                    order.items.map((item, index) => (
                      <span key={index}>
                        {`${item.quantity}x ${item.menu_item_name}`}
                        {index < order.items.length - 1 ? ', ' : ''} 
                      </span>
                    ))
                  }
                </p>

                <SelectCustom 
                  options={status}
                  value={order.status}
                  onChange={(selectedOption) => handleStatusChange(selectedOption, order.id)}
                  id={order.id}
                  disabled={!isAdmin}
                  icon
                />
              </OrderCard>
            ))
          }

          <div className='table-container'>
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
                {orders &&
                  orders.map(order => (
                    <tr key={order.id}>
                      <td>
                        <SelectCustom 
                          options={status}
                          value={order.status}
                          onChange={(selectedOption) => handleStatusChange(selectedOption, order.id)}
                          id={order.id}
                          disabled={!isAdmin}
                          icon
                        />
                      </td>
                      <td>
                        <span onClick={() => handleOrderDetails(order.id)}>
                          {String(order.id).padStart(6, '0')}
                        </span>
                      </td>
                      <td className="detailing">
                        {order.items && (
                          <p>
                            {order.items.map((item, index) => ( // depois de limpar banco trocar pra id
                              <Fragment key={index}>
                                {`${item.quantity}x ${item.menu_item_name}`}
                                {index < order.items.length - 1 ? ', ' : ''}
                              </Fragment>
                            ))}
                          </p>
                        )}
                      </td>
                      <td>{moment(order.created_at).subtract(3, 'hours').format('DD/MM [às] HH:mm')}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  );
};