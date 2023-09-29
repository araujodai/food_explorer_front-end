import bannerImage from "../../assets/macaroons_and_fruits_banner_image.png";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { CarouselCustom } from "../../components/CarouselCustom";

import { Container, ContentScrollWrapper, BannerWrapper, BannerContent } from "./styles";

export default function Home() {
  const cards = [
    {id: 1, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Salada Ravanello" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias distinctio natus debitis. Quam assumenda, illum et minima corrupti dolorum expedita eveniet voluptatum illoSit fuga velit doloribus consequatur obcaecati", price: "49.97" },
    {id: 2, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Torta", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias distinctio natus debitis. Quam assumenda, illum et minima corrupti dolorum expedita eveniet voluptatum illoSit fuga velit doloribus consequatur obcaecati", price: "49.97" },
    {id: 3, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Lasanha", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias distinctio natus debitis. Quam assumenda, illum et minima corrupti dolorum expedita eveniet voluptatum illoSit fuga velit doloribus consequatur obcaecati", price: "49.97" },
    {id: 4, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Feijoada", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias distinctio natus debitis. Quam assumenda, illum et minima corrupti dolorum expedita eveniet voluptatum illoSit fuga velit doloribus consequatur obcaecati", price: "49.97" },
    {id: 5, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Macarrão", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias distinctio natus debitis. Quam assumenda, illum et minima corrupti dolorum expedita eveniet voluptatum illoSit fuga velit doloribus consequatur obcaecati", price: "49.97" },
    {id: 6, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Strogonoff", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias distinctio natus debitis. Quam assumenda, illum et minima corrupti dolorum expedita eveniet voluptatum illoSit fuga velit doloribus consequatur obcaecati", price: "49.97" },
    {id: 7, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Sopa", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias distinctio natus debitis. Quam assumenda, illum et minima corrupti dolorum expedita eveniet voluptatum illoSit fuga velit doloribus consequatur obcaecati", price: "49.97" }
  ]

  return (
    <Container>
      <Header />
      <ContentScrollWrapper>
        <main>
          <div className="bannerWrapper">
            <img src={bannerImage} alt="" />

            <div className="bannerText">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>

          <Section title="Refeições">
            <CarouselCustom>
              {
                cards.map(card => (
                  <Card 
                    key={String(card.id)}
                    image={card.image}
                    name={card.name}
                    description={card.description}
                    price={card.price}
                  />
                ))
              }
            </CarouselCustom>
          </Section>  

          <Section title="Sobremesas">
            <CarouselCustom>
              {
                cards.map(card => (
                  <Card 
                    key={String(card.id)}
                    image={card.image}
                    name={card.name}
                    description={card.description}
                    price={card.price}
                  />
                ))
              }
            </CarouselCustom>
          </Section>

          <Section title="Bebidas">
            <CarouselCustom>
              {
                cards.map(card => (
                  <Card 
                    key={String(card.id)}
                    image={card.image}
                    name={card.name}
                    description={card.description}
                    price={card.price}
                  />
                ))
              }
            </CarouselCustom>
          </Section>

        </main>
        <Footer />
      </ContentScrollWrapper>
    </Container>
  )
};