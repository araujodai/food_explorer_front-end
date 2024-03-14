import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { api } from "../../services/api";

import { MdNoMealsOuline } from "react-icons/md";
import bannerImageMobile from "../../assets/macaroons_and_fruits_banner_image.png";
import bannerImageDesktop from "../../assets/macaroons_and_fruits_banner_image_desktop.png";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { CarouselCustom } from "../../components/CarouselCustom";
import { categories } from "../../components/SelectCustom";
import { notify } from "../../components/Notification";
import { Loading } from "../../components/Loading";

import { Container, BannerWrapper } from "./styles";

export function Home() {
  const [ menu, setMenu ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const { user } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  const { search, setNoResults, noResults } = useSearch();

  useEffect(() => {
    setIsLoading(true);

    async function fetchMenuItems() {
      try {
        const response = await api.get(`/menu?search=${search}`);
        setMenu(response.data);
        setNoResults(response.data.length === 0);
        
        //linha teste
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 3000);
        setIsLoading(false);

      } catch (error) {
        setIsLoading(false);
        if (error.response) {
          notify.error(error.response.data.message);

        } else {
          notify.error("Erro ao carregar o menú, tente novamente mais tarde.");
        };
      };
    };

    fetchMenuItems();
  }, [search]);

  return (
    <Container>
      <Header />

      {/* {isLoading && <Loading />} */}

      <div className="contentScrollWrapper">
        <main className="contentMaxWidthWrapper">

          <BannerWrapper>
            <img src={bannerImageMobile} alt="Imagem macaroons e frutas" className="mobile"/>
            <img src={bannerImageDesktop} alt="Imagem macaroons e frutas" className="desktop"/>

            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </BannerWrapper>

          {/* {isLoading && <Loading />} */}
          <Loading isVisible={isLoading} />

          {
            categories
            .filter(category => menu.some(menuItem => menuItem.category === category.value))
            .map(category => (
              <Section
                key={category.value}
                title={category.label}
              >
                <CarouselCustom>
                  {
                    menu.filter(menuItem => menuItem.category === category.value)
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

          {
            noResults &&
            <div className="empty">
              <MdNoMealsOuline />
              <p>Nenhum item encontrado.</p>
            </div>
          }

        </main>
        <Footer />
      </div>
    </Container>
  )
};