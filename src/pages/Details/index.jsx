import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { PiReceiptBold } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import imagePlaceholder from "../../assets/menu_item_image_placeholder.png";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Stepper } from "../../components/Stepper";
import { Footer } from "../../components/Footer";

import { Container, ContentWrapper, DishWrapper, DishInfo, IngredientsList } from "./styles";

export function Details() {
  const [ data, setData ] = useState(null);

  const { user } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  const params = useParams();
  const navigate = useNavigate();
  const imageUrl = data && data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder;

  function handleBack() {
    navigate(-1);
  };

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  };

  useEffect(() => {
    async function fetchMenuItem() {
      const response = await api.get(`/menu/${params.id}`);
      setData(response.data);
    };

    fetchMenuItem();
  }, []);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main className="contentMaxWidthWrapper">
          <Button 
            variant="secondary" 
            title="voltar" 
            icon={MdKeyboardArrowLeft} 
            fontSize="24px" 
            size="32px"
            onClick={handleBack}
          />

          {
            data &&
            <DishWrapper>
              <img 
              src={imageUrl} 
              alt={`Imagem de ${data.name}`} 
              />

              <DishInfo>
                <h2>{data.name}</h2>
                <p>{data.description}</p>

                {
                  data.ingredients &&
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

                {
                  isAdmin &&
                    <Button 
                      title="Editar prato"
                      className="buttonAdmin"
                      onClick={handleEdit}
                    />
                }

                {
                  !isAdmin &&
                  <div className="dishManager">
                    <Stepper />
                    
                    <Button 
                      title={`incluir · R$ ${data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={PiReceiptBold} 
                      size="20px"
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