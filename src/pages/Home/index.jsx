import { useState, useEffect } from "react";

import { MdNoMealsOuline } from "react-icons/md";
import bannerImageMobile from "../../assets/macaroons_and_fruits_banner_image.png";
import bannerImageDesktop from "../../assets/macaroons_and_fruits_banner_image_desktop.png";

import { Header } from "../../components/Header";
import { categories } from "../../components/SelectCustom";
import { Section } from "../../components/Section";
import { CarouselCustom } from "../../components/CarouselCustom";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { notify } from "../../components/Notification";
import { Loading } from "../../components/Loading";
import { EmptyState } from "../../components/EmptyState";

import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { api } from "../../services/api";

import { Container, BannerWrapper, ContentWrapper } from "./styles";

export function Home() {
  const [ menu, setMenu ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const { user } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  const { search, setNoResults, noResults } = useSearch();

  useEffect(() => {
    async function fetchMenuItems() {
      setIsLoading(true);

      try {
        const response = await api.get(`/menu?search=${search}`);
        setMenu(response.data);
        setNoResults(response.data.length === 0);

      } catch (error) {
        if (error.response) {
          notify.error(error.response.data.message);

        } else {
          notify.error("Erro ao carregar o menú, tente novamente mais tarde.");
        };

      } finally {
        setIsLoading(false);
      };
    };

    fetchMenuItems();
  }, [search]);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <main >
          <BannerWrapper>
            <img src={bannerImageMobile} alt="Imagem macaroons e frutas" className="mobile"/>
            <img src={bannerImageDesktop} alt="Imagem macaroons e frutas" className="desktop"/>

            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </BannerWrapper>

          <Loading isVisible={isLoading} />

          <div className="teste">
          { categories
            .filter(category => menu.some(menuItem => menuItem.category === category.value))
            .map(category => (
              <Section
                key={category.value}
                title={category.label}
              >
                <CarouselCustom>
                  { menu.filter(menuItem => menuItem.category === category.value)
                    .map(menuItem => (
                      <Card 
                        key={String(menuItem.id)}
                        data={menuItem}
                        isAdmin={isAdmin}
                      />
                    ))
                  }
                </CarouselCustom>
              </Section>
            ))
          }
          </div>

          { noResults &&
            <EmptyState 
              message={isAdmin ? (search ? false : "Não existem pratos cadastrados.") : false}
              actionRoute={ isAdmin ? (search ? false : "/new") : false }
              actionLabel="Criar prato"
              icon={MdNoMealsOuline}
              className={ search || !isAdmin ? "noAction" : "" }
            />
          }
        </main>
        <Footer />
      </ContentWrapper>
    </Container>
  )
};