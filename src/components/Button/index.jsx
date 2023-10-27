import { PrimaryButton, SecondaryButton } from "./styles";

export function Button({ variant, icon: Icon, title, fontSize, size, ...rest }) {
  switch (variant) {
    case "secondary":
      return (
        <SecondaryButton type="button" fontSize={fontSize} {...rest} >
          {Icon && <Icon size={size} />}
          {title && title}
        </SecondaryButton>
      )

    default:
      return (
        <PrimaryButton type="button" {...rest}>
          {Icon && <Icon size={size} />}
          {title}
        </PrimaryButton>
      )
  }
};