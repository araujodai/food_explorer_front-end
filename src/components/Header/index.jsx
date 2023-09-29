import { PiReceiptBold, PiSignOutBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

import { MobileMenu } from "../MobileMenu";
import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";

import { Container, DesktopMenu } from "./styles";

export function Header() {
  const isAdmin = false;

  const navigationTabs = [
    {name: "Meus favoritos", value: "#", isAdmin: false},
    {name: "Novo prato", value: "#", isAdmin: true},
    {name: "Pedidos", value: "#", isAdmin: true},
    {name: "Hitórico de pedidos", value: "#", isAdmin: false},
  ];
  const amount = 3;

  return (

    <Container>
      <nav>
        <MobileMenu isAdmin={isAdmin} tabs={navigationTabs}/>

        <Logo isAdmin={isAdmin}/>
        
        {
          !isAdmin &&
          <div className="mobileOrderButton">
            <Button 
              variant="secondary" 
              icon={PiReceiptBold} 
              size="32px"
            />
            <span>{amount}</span>
          </div>
        }

        <DesktopMenu>
          <Input 
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />

          {
            !isAdmin ? (
            <Button
              title={`Pedidos (${amount})`} 
              icon={PiReceiptBold} 
              size="32px" 
            />
            ) : (
              <Button title="Novo prato" />
            )
          }

          <Button 
            variant="secondary" 
            icon={PiSignOutBold} 
            size="32px" 
          />

        </DesktopMenu>
      </nav>
    </Container>
  )
};