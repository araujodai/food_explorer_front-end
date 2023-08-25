import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiReceiptBold } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { IconButton } from "../../components/IconButton";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, ContentWrapper, DishWrapper, DishInfo, IngredientsList, DishManager } from "./styles";

export default function Details() {
  return (
    <Container>
      <Header />

      <ContentWrapper>

      <main>
        <ButtonText title="voltar" icon={MdKeyboardArrowLeft} />

        <DishWrapper>
          <img 
          src="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
          alt="" 
          />

          <DishInfo>
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <IngredientsList>
              <span>alface</span>
              <span>cebola</span>
              <span>pão naan</span>
              <span>pepino</span>
              <span>rabanete</span>
              <span>tomate</span>
              <span>tomate</span>
              <span>tomate</span>
            </IngredientsList>

            <DishManager>
              <div>
                <IconButton 
                  icon={AiOutlineMinus} 
                  width="27px"
                  height="27px"
                />
                <span>01</span>
                <IconButton 
                  icon={AiOutlinePlus} 
                  width="27px"
                  height="27px"
                />
              </div>
              <Button title="pedir · R$ 25.00" icon={PiReceiptBold} />
            </DishManager>
          </DishInfo>


        </DishWrapper>
      </main>
      <Footer />
      </ContentWrapper>
    </Container>
  )
};