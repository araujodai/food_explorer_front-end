import { PiReceiptBold } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Stepper } from "../../components/Stepper";
import { Footer } from "../../components/Footer";

import { Container, ContentWrapper, DishWrapper, DishInfo, IngredientsList } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main className="contentMaxWidthWrapper">
          <Button variant="secondary" title="voltar" icon={MdKeyboardArrowLeft} fontSize="24px" size="32px"/>

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
                <span>tomate</span>
                <span>tomate</span>
                <span>tomate</span>
              </IngredientsList>

              <div className="dishManager">
                <Stepper />
                <Button title="incluir · R$ 25.55" icon={PiReceiptBold} size="20px"/>
              </div>
            </DishInfo>
          </DishWrapper>
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  )
};