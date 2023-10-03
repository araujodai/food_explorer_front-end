import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { InputFile } from "../../components/InputFile";
import { Input } from "../../components/Input";
import { SelectCustom } from "../../components/SelectCustom";
import { IngredientTag } from "../../components/IngredientTag";
import { Textarea } from "../../components/Textarea";
import { Footer } from "../../components/Footer";

import { Container, ContentWrapper, Form, IngredientGroup } from "./styles";

export function EditDish() {
  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main className="contentMaxWidthWrapper">
          <Button variant="secondary" title="voltar" icon={MdKeyboardArrowLeft} />

          <Form>
            <h1>Editar prato</h1>

            <InputFile 
              id="mealImage"
              title="Selecione a imagem"
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
                className="delete"
              />

              <Button 
                title="Salvar alterações"
                className="light"
              />
          </div>

          </Form>
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  )
};