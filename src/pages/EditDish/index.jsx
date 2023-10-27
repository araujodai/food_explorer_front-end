import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { InputFile } from "../../components/InputFile";
import { Input } from "../../components/Input";
import { SelectCustom } from "../../components/SelectCustom";
import { IngredientTag } from "../../components/IngredientTag";
import { Textarea } from "../../components/Textarea";
import { Footer } from "../../components/Footer";
import { notify } from "../../components/Notification";

import { Container, ContentWrapper, Form, IngredientGroup } from "./styles";

export function EditDish() {
  const [ image, setImage ] = useState(null);
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState("");

  const [ price, setPrice ] = useState(0);
  const [ description, setDescription ] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  };

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  function handleUpdateImage(event) {
    setImage(event.target.files[0]);
  };

  async function handleUpdateMenuItem() {
    try {
      const menuItem = new FormData();

      menuItem.append("image", image);
      menuItem.append("name", name);
      menuItem.append("category", category);
      menuItem.append("ingredients", JSON.stringify(ingredients));
      menuItem.append("price", price);
      menuItem.append("description", description);
  
      await api.put(`/menu/${params.id}`, menuItem);
      notify.success("Item atualizado com sucesso!");
      navigate("/");

    } catch (error) {
      if (error.response) {
        notify.error(error.response.data.message);

      } else {
        notify.error("Não foi possível atualizar esse item, tente novamente.");
      };
    };
  };

  async function handleDeleteMenuItem() {
    const confirm = window.confirm("Você está prestes a remover esse item e essa ação não pode ser desfeita, deseja prosseguir?");

    if (confirm) {
      try {
        await api.delete(`menu/${params.id}`);
  
        notify.success("Item removido com sucesso.");
        navigate("/");
        
      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);
  
        } else {
          notify.error("Não foi possível remover esse item, tente novamente.");
        };
      };
    };
  };

  useEffect(() => {
    async function fetchMenuItem() {
      try {
        const response = await api.get(`/menu/${params.id}`);
        const data = response.data;

        setImage(data.image);
        setName(data.name);
        setCategory(data.category);
        setIngredients(data.ingredients.map(ingredient => ingredient.name));
        setPrice(data.price);
        setDescription(data.description);

      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);
  
        } else {
          notify.error("Não foi possível carregar as informações deste item, tente novamente.");
        }
      };
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
            onClick={handleBack}
          />

          <Form>
            <h1>Editar prato</h1>

            <InputFile 
              id="mealImage"
              title={image ? "Trocar imagem" : "Adicionar imagem"}
              onChange={handleUpdateImage}
            />

            <Input 
              label="Nome" 
              type="text" 
              placeholder="Ex.: Salada Ceasar"
              id="dishName"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            
            <SelectCustom
              title="Categoria"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />

            <IngredientGroup>
              <strong>Ingredientes</strong>
              
              <div className="tagsWrapper">
                {
                  ingredients.map((ingredient, index) => (
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
              type="text" 
              placeholder="R$ 00,00"
              id="dishPrice"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />

            <Textarea 
              title="Descrição"
              id="dishDescription"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <div className="buttons">
              <Button 
                title="Excluir prato"
                className="delete"
                onClick={handleDeleteMenuItem}
              />

              <Button 
                title="Salvar alterações"
                className="light"
                onClick={handleUpdateMenuItem}
              />
          </div>

          </Form>
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  )
};