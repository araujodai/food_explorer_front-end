import { Container } from "./styles";

export function IconButton({ icon: Icon, width, height, ...rest }) {
  return (
    <Container width={width} height={height} {...rest}>
      {<Icon />}
    </Container>
  )
};