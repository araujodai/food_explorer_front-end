import bannerImage from "../../assets/macaroons_and_fruits_banner_image.png";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { Container, ContentScrollWrapper, BannerWrapper, BannerContent } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <ContentScrollWrapper>
        <main>
          <BannerWrapper>
            <BannerContent>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </BannerContent>

            <img src={bannerImage} alt="" />
          </BannerWrapper>

          <Section title="Refeições">
            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />

            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />

            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />
          </Section>

          <Section title="Sobremesas">
            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />

            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />

            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />
          </Section>

          <Section title="Bebidas">
            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />

            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />

            <Card 
              image="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              name="Salada Ravanello"
              price="49.97"
            />
          </Section>
        </main>
        <Footer />
      </ContentScrollWrapper>
    </Container>
  )
};