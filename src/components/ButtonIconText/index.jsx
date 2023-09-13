import { Container } from "./styles";

export function ButtonIconText({ icon: Icon, title, fontSize, size, ...rest }) {
  return (
    <Container fontSize={fontSize} {...rest} >
      {Icon && <Icon size={size} />}
      {title && title}
    </Container>
  )
};