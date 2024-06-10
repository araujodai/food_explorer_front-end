import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SimpleCard } from "../../components/SimpleCard";
import { notify } from "../../components/Notification";
import { Loading } from "../../components/Loading";
import { EmptyState } from "../../components/EmptyState";

import { api } from "../../services/api";

import { Container, ContentWrapper } from "./styles";

export function Favorites() {
  const [ favorites, setFavorites ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isEmpty, setIsEmpty ] = useState(false);

  async function handleRemoveFavorite(item) {
    setIsLoading(true);

    try {
      await api.delete(`/favorites/${item.id}`);
      setFavorites(prevState => prevState.filter(favorite => favorite.menu_item_id !== item.id));

      if (favorites.length <= 1) {
        setIsEmpty(true);
      };

    } catch(error) {
      if(error.response) {
        notify.error(error.response.data.message);

      } else {
        notify.error("Não foi possível remover esse item dos favoritos, tente novamente.");
      };

    } finally {
      setIsLoading(false);
    };
  };

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get("/favorites");
        setFavorites(response.data);

        if (response.data.length === 0) {
          setIsEmpty(true);
        }

      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);

        } else {
          notify.error("Não foi possível carregar os favoritos, tente novamente.");
        };

      } finally {
        setIsLoading(false);
      };
    };

    fetchFavorites();
  }, []);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main>
          <h1>Meus favoritos</h1>

          <Loading isVisible={isLoading} />

          { favorites && !isEmpty &&
            <div className="favoritesWrapper">
              { favorites.map(item => {
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
          }

          { isEmpty &&
            <EmptyState 
              message="Sua lista de favoritos está vazia. Explore o menu para adicionar." 
              actionRoute="/"
              actionLabel="Adicionar favoritos"
              className="noContent"
            />
          }
        </main>

        <Footer />
      </ContentWrapper>
    </Container>
  );
};