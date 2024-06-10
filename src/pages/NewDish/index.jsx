import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { InputFile } from "../../components/InputFile";
import { Input } from "../../components/Input";
import { SelectCustom, categories } from "../../components/SelectCustom";
import { IngredientTag } from "../../components/IngredientTag";
import { Textarea } from "../../components/Textarea";
import { Footer } from "../../components/Footer";
import { notify } from "../../components/Notification";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";

import { Container, ContentWrapper, Form, IngredientGroup } from "./styles";

export function NewDish() {
  const [ imageUploaded, setImageUploaded ] = useState(null);
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState("");

  const [ price, setPrice ] = useState(0);
  const [ description, setDescription ] = useState("");

  const [ isLoading, setIsLoading ] = useState(false);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  };

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  async function handleNewMenuItem() {
    if (!name || !category || !ingredients || !price || !description) {
      return notify.error("Preencha todos os campos para continuar.");
    };

    if (newIngredient) {
      return notify.error("Existe um ingrediente pendente, adicione para continuar");
    };

    setIsLoading(true);

    try {
      const menuItem = new FormData();
  
      menuItem.append("image", imageUploaded);
      menuItem.append("name", name);
      menuItem.append("category", category);
      menuItem.append("ingredients", JSON.stringify(ingredients));
      menuItem.append("price", price);
      menuItem.append("description", description);
  
      await api.post("/menu", menuItem);
      setIsLoading(false);
  
      notify.success("Item criado com sucesso!");
      navigate("/");

    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        notify.error(error.response.data.message);

      } else {
        notify.error("Não foi possível criar esse item, verifique e tente novamente.");
      };
    };
  };

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main>
          <Button 
            variant="secondary" 
            title="voltar" 
            icon={MdKeyboardArrowLeft} 
            onClick={handleBack}
          />

          <Form>
            <h1>Novo prato</h1>

            <InputFile 
              id="mealImage"
              title="Adicionar imagem"
              onChange={e => setImageUploaded(e.target.files[0])}
            />

            <Input 
              label="Nome" 
              type="text" 
              placeholder="Ex.: Salada Ceasar"
              id="dishName"
              onChange={e => setName(e.target.value)}
            />

            <label>
              Categoria
              <SelectCustom 
                options={categories}
                onChange={setCategory}
                name="dishCategory"
              />
            </label>

            <IngredientGroup>
              <strong>Ingredientes</strong>
              
              <div className="tagsWrapper">
                { ingredients.map((ingredient, index) => (
                    <IngredientTag 
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }

                <IngredientTag 
                  isNew
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </IngredientGroup>

            <Input 
              label="Preço" 
              type="number" 
              placeholder="R$ 00,00"
              id="dishPrice"
              onChange={e => setPrice(e.target.value)}
            />

            <Textarea 
              title="Descrição"
              id="dishDescription"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />

            <Button 
              title="Salvar alterações"
              className="light"
              onClick={handleNewMenuItem}
            />
          </Form>
        </main>

        <Loading isVisible={isLoading} />

        <Footer />
      </ContentWrapper>
    </Container>
  )
};