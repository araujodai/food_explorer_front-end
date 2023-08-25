import { Container } from "./styled";

export function Textarea({ title, id, ...rest }) {
  return (
    <Container>

      <label htmlFor={id}>{title}</label>
      <textarea name={id} id={id} {...rest}></textarea>

    </Container>
  )
};