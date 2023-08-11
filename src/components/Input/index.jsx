import { Container } from "./styles";

export function Input({ icon: Icon, label, id, ...rest }) {
  return (
    <Container>
      {
        label && 
        <label htmlFor={id}>
          {label}
        </label>
      }
      <div>
        {Icon && <Icon />}
        <input id={id} {...rest} />
      </div>
    </Container>
  );
}