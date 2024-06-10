import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { PiReceiptBold } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import imagePlaceholder from "../../assets/menu_item_image_placeholder.svg";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Stepper } from "../../components/Stepper";
import { Footer } from "../../components/Footer";
import { notify } from "../../components/Notification";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { Container, ContentWrapper, DishWrapper, DishInfo, IngredientsList } from "./styles";

export function Details() {
  const [ data, setData ] = useState(null);
  const [ quantity, setQuantity ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(true);

  const { user } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  const { handleAddToCart } = useCart();

  const params = useParams();
  const navigate = useNavigate();
  const imageUrl = data && data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder;

  const totalPrice = data && (data.price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  function handleBack() {
    navigate(-1);
  };

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  };

  useEffect(() => {
    async function fetchMenuItem() {
      try {
        const response = await api.get(`/menu/${params.id}`);
        setData(response.data);

      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);

        } else {
          notify.error("Não foi possível carregar as informações deste item, tente novamente.");
        };
        
      } finally {
        setIsLoading(false);
      };
    };

    fetchMenuItem();
  }, []);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main>
          <Button 
            variant="secondary" 
            title="voltar" 
            icon={MdKeyboardArrowLeft} 
            fontSize="24px" 
            size="32px"
            onClick={handleBack}
          />

          <Loading isVisible={isLoading} />

          { data &&
            <DishWrapper>
              <img 
                src={imageUrl} 
                alt={`Imagem de ${data.name}`} 
              />

              <DishInfo>
                <h2>{data.name}</h2>
                <p>{data.description}</p>

                { data.ingredients &&
                  <IngredientsList>
                    {
                      data.ingredients.map(ingredient => (
                        <span key={String(ingredient.id)}>
                          {ingredient.name}
                        </span>
                      ))
                    }
                  </IngredientsList>
                }

                { isAdmin &&
                  <Button 
                    title="Editar prato"
                    className="buttonAdmin"
                    onClick={handleEdit}
                  />
                }

                { !isAdmin &&
                  <div className="dishManager">
                    <Stepper 
                      quantity={quantity} 
                      setQuantity={setQuantity}
                    />
                    
                    <Button 
                      title={`incluir · R$ ${totalPrice}`}
                      icon={PiReceiptBold} 
                      size="20px"
                      onClick={() => {
                        handleAddToCart({data, quantity}); 
                        setQuantity(1);
                      }}
                    />
                  </div>
                }

              </DishInfo>
            </DishWrapper>
          }
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  )
};