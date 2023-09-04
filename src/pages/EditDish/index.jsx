import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { ButtonIconText } from "../../components/ButtonIconText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { SelectCustom } from "../../components/SelectCustom";
import { IngredientTag } from "../../components/IngredientTag";
import { Textarea } from "../../components/Textarea";
import { InputFile } from "../../components/InputFile";
import { Logo } from "../../components/Logo";

import { Container, ContentWrapper, Form, IngredientGroup } from "./styles";

export default function NewDish() {
  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main>
          <ButtonIconText title="voltar" icon={MdKeyboardArrowLeft} />

          <Form>
            <h1>Editar prato</h1>

            <InputFile 
              id="mealImage"
            />

            <Input 
              label="Nome" 
              type="text" 
              placeholder="Ex.: Salada Ceasar"
              id="dishName"
            />
            
            <SelectCustom
              title="Categoria"
            />

            <IngredientGroup>
              <strong>Ingredientes</strong>
              
              <div className="tagsWrapper">

                <IngredientTag 
                  value="Adicionar"
                />

                <IngredientTag 
                  value="ovo frito"
                />

                <IngredientTag 
                  value="arroz"
                />

                <IngredientTag 
                  isNew
                />
              </div>
            </IngredientGroup>

            <Input 
              label="Preço" 
              type="text" 
              placeholder="R$ 00,00"
              id="dishPrice"
            />

            <Textarea 
              title="Descrição"
              id="dishDescription"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />

            <div className="buttons">
              <Button 
                title="Excluir prato"
                className="tertiary"
              />

              <Button 
                title="Salvar alterações"
                className="secondary"
              />
          </div>

          </Form>
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  )
};