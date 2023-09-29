import { Container } from "./styles";

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>

      <div>
        <div className="esquerda"></div>
        {children}
        <div className="direita"></div>
      </div>
    </Container>
  )
};