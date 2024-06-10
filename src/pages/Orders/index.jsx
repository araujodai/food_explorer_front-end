import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SelectCustom, status } from "../../components/SelectCustom";
import { notify } from "../../components/Notification";
import { Loading } from "../../components/Loading";
import { EmptyState } from "../../components/EmptyState";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, ContentWrapper, OrderCard, TableWrapper } from "./styles";

export function Orders() {
  const [ orders, setOrders ] = useState([]);
  const [ orderStatus, setOrderStatus ] = useState("");
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isEmpty, setIsEmpty ] = useState(false);

  const navigate = useNavigate();

  const { user } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  async function handleStatusChange(selectedOption, orderId) {
    try {
      setIsLoading(true);

      await api.put("/orders", {id: orderId, status: selectedOption});
      setOrderStatus(selectedOption);
      
      notify.success("Pedido atualizado com sucesso.");

    } catch (error) {
      notify.error("Não foi possível atualizar o pedido, tente novamente.");

    } finally {
      setIsLoading(false);
    }
  };

  function handleOrderDetails(orderId) {
    navigate(`/orders/${orderId}`);
  };

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get("orders")
        setOrders(response.data)

        if (response.data.length === 0) {
          setIsEmpty(true);
        }

      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);
  
        } else {
          notify.error("Não foi possível carregar os pedidos, tente novamente.");
        };
      } finally {
        setIsLoading(false);
      };
    };

    fetchOrders();
  }, [orderStatus]);

  return (
    <Container>
      <Header />

      <Loading isVisible={isLoading} />

      <ContentWrapper>
        <main>
          <h1>Pedidos</h1>

          { orders && !isEmpty &&
            orders.map(order => (
              <OrderCard 
                key={String(order.id)} 
                className={!isAdmin ? "readOnly" : ""}
                onClick={() => handleOrderDetails(order.id)}
              >
                <strong>{String(order.id).padStart(6, '0')}</strong>
                
                <span>{moment(order.created_at).subtract(3, 'hours').format('DD/MM [às] HH:mm')}</span>
                <p>
                  { order.items.map((item, index) => (
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

          { orders && !isEmpty &&
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Detalhamento</th>
                    <th>Data e hora</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>
                        <SelectCustom 
                          options={status}
                          value={order.status}
                          onChange={(selectedOption) => handleStatusChange(selectedOption, order.id)}
                          id={order.id}
                          disabled={!isAdmin}
                          icon
                          className="teste"
                        />
                      </td>
                      <td>
                        <span onClick={() => handleOrderDetails(order.id)}>
                          {String(order.id).padStart(6, '0')}
                        </span>
                      </td>
                      <td className="detailing">
                        { order.items && (
                          <p>
                            {order.items.map((item, index) => (
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
              </table>
            </TableWrapper>
          }

          { isEmpty &&
            <EmptyState 
              title="Nenhum pedido encontrado" 
              message={ isAdmin ? "Ainda não existem pedidos para a loja" : "Você ainda não tem pedidos, adicione itens ao seu carrinho." } 
              actionRoute={ isAdmin ? false : "/" }
              actionLabel="Criar pedido"
              className="noContent"
            />
          }
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  );
};