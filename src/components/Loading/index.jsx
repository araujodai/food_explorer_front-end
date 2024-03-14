import { Container } from "./styles";

export function Loading({ isVisible = false }) {
  return isVisible ? (
    <Container>
      <div className="loading-spinner" />
    </Container>
  ) : null;
};