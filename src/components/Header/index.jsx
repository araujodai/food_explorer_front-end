import { PiReceiptBold } from "react-icons/pi";
import { Logo } from "../Logo";

import { MobileMenu } from "../MobileMenu";
import { ButtonIconText } from "../ButtonIconText";

import { Container, Cart } from "./styles";

export function Header() {
  const isAdmin = false;

  return (
    <Container>
      <nav>
        <MobileMenu isAdmin={isAdmin} />

        <Logo isAdmin={isAdmin}/>
        
        {
          !isAdmin &&
          <Cart>
            <ButtonIconText icon={PiReceiptBold} size="32px"/>
            
            <span>0</span>
            
        </Cart>
        }
      </nav>
    </Container>
  )
};