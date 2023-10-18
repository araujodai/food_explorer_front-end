import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { PiReceiptBold, PiSignOutBold } from "react-icons/pi";

import { MobileMenu } from "../MobileMenu";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import { Button } from "../Button";

import { Container, DesktopMenu } from "./styles";

export function Header() {
  const { user, signOut } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  const { amount, getTotalAmount } = useCart();

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  function handleSearchResults(event) {
    if (event.key === "Enter" && !isHome) {
      navigate("/");
    };
  };

  const navigationTabs = [
    {name: "Meus favoritos", value: "#", isAdmin: false},
    {name: "Novo prato", value: "#", isAdmin: true},
    {name: "Pedidos", value: "#", isAdmin: true},
    {name: "Hitórico de pedidos", value: "#", isAdmin: false},
  ];

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

          <SearchBar 
            onKeyPress={handleSearchResults}
          />

          {
            !isAdmin ? (
            <Button
              title={`Pedido (${getTotalAmount()})`} 
              icon={PiReceiptBold} 
              size="32px" 
            />
            ) : (
              <Button title="Novo prato" onClick={() => navigate("/new")} />
            )
          }

          <Button 
            variant="secondary" 
            icon={PiSignOutBold} 
            size="32px" 
            onClick={signOut}
          />

        </DesktopMenu>
      </nav>
    </Container>
  )
};