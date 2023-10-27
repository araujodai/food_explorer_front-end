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
import { options } from "../../components/SelectCustom";
import { notify } from "../../components/Notification";

import { Container, BannerWrapper } from "./styles";

export function Home() {
  const [ menu, setMenu ] = useState([]);

  const { user } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  const { search, setNoResults, noResults } = useSearch();

  useEffect(() => {
    async function fetchMenuItems() {
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
      };
    };

    fetchMenuItems();
  }, [search]);

  return (
    <Container>
      <Header />
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

          {
            options
            .filter(option => menu.some(card => card.category === option.value))
            .map(option => (
              <Section
                key={option.value}
                title={option.label}
              >
                <CarouselCustom>
                  {
                    menu.filter(card => card.category === option.value)
                      .map(card => (
                        <Card 
                        key={String(card.id)}
                        data={card}
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