import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/auth";
// import { useCart } from "../../hooks/cart";
import { useCart } from "../../hooks/order";

import { PiReceiptBold, PiSignOutBold } from "react-icons/pi";

import { MobileMenu } from "../MobileMenu";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import { Button } from "../Button";

import { Container, DesktopMenu } from "./styles";
import { notify } from "../Notification";

export function Header() {
  const { user, signOut } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  const { cart, cartItems } = useCart();
  const [ amount, setAmount ] = useState(0);
  
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

  function handleViewCart() {
    if (cart <= 0) {
      notify.info("Seu carrinho está vazio!");
    } else {
      navigate("/newOrder");
    };
  };

  useEffect(() => {
    setAmount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  return (
    <Container>
      <nav>
        <MobileMenu isAdmin={isAdmin} tabs={navigationTabs}/>

        <Logo isAdmin={isAdmin} onClick={() => navigate("/")}/>
        
        {
          !isAdmin &&
          <div className="mobileOrderButton" onClick={handleViewCart}>
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
              title={`Pedido (${amount})`}
              icon={PiReceiptBold} 
              size="32px" 
              onClick={handleViewCart}
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