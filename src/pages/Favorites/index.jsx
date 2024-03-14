import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SimpleCard } from "../../components/SimpleCard";

import { api } from "../../services/api";
import { notify } from "../../components/Notification";

import { Container, ContentWrapper } from "./styles";

export function Favorites() {
  const [ favorites, setFavorites ] = useState([]);

  async function handleRemoveFavorite(item) {
    try {
      await api.delete(`/favorites/${item.id}`);
      setFavorites(prevState => prevState.filter(favorite => favorite.menu_item_id !== item.id));

    } catch(error) {
      if(error.response) {
        notify.error(error.response.data.message);

      } else {
        notify.error("Não foi possível remover esse item dos favoritos, tente novamente.");
      };
    };
  };

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get("/favorites");
        setFavorites(response.data);

      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);

        } else {
          notify.error("Não foi possível carregar os favoritos, tente novamente.");
        };
      };
    };

    fetchFavorites();
  }, []);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main className="contentMaxWidthWrapper">
          <h1>Meus favoritos</h1>

          <div className="favoritesWrapper">

          {
            favorites &&
            favorites.map(item => {
              const data = {
                id: item.menu_item_id,
                name: item.menu_item_name,
                image: item.menu_item_image,
              };

              return (
                <SimpleCard 
                  key={String(item.id)}
                  data={data}
                  title="Remover"
                  onClick={() => handleRemoveFavorite(data)}
                />
              );
            })
          }

          </div>
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  );
};