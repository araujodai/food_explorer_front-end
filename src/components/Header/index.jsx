import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { PiReceiptBold, PiSignOutBold } from "react-icons/pi";

import { MobileMenu } from "../MobileMenu";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import { Button } from "../Button";
import { notify } from "../Notification";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { Container, DesktopMenu } from "./styles";

export function Header() {
  const { user, signOut, isTokenExpired } = useAuth();
  const isAdmin = user.is_admin ? true : false;

  const { cart } = useCart();
  const [ amount, setAmount ] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const tabs = {
    admin: [
      {name: "Novo prato", value: "/new"},
      {name: "Pedidos", value: "/orders"},
    ],
    client: [
      {name: "Meus favoritos", value: "/favorites"},
      {name: "Hitórico de pedidos", value: "/orders"},
      {name: "Pedidos", value: "/newOrder"},
    ],
  };

  const userNavigationTabs = isAdmin ? tabs.admin : tabs.client;

  function handleSearchResults(event) {
    if (event.key === "Enter" && !isHome) {
      navigate("/");
    };
  };

  function handleViewCart() {
    if (cart <= 0) {
      notify.info("Seu carrinho está vazio!");
    } else {
      navigate("/newOrder");
    };
  };

  function handleSignOut() {
    navigate("/");
    signOut();
  };

  useEffect(() => {
    if (isTokenExpired) {
      handleSignOut();
    }
  }, [isTokenExpired]);

  useEffect(() => {
    setAmount(cart.reduce((total, item) => total + item.quantity, 0));

    

  }, [cart]);

  return (
    <Container>
      <nav>
        <MobileMenu tabs={userNavigationTabs}/>

        <Logo isAdmin={isAdmin} onClick={() => navigate("/")}/>
        
        {!isAdmin &&
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

          <ul>
            {userNavigationTabs.map(tab => (
              <li key={tab.name}>
                {tab.name !== "Pedidos" ? (
                  <Link to={tab.value}>{tab.name}</Link>
                ) : (
                  <Button
                    title={`${tab.name} ${!isAdmin ? `(${amount})` : ''}`}
                    icon={!isAdmin && PiReceiptBold} 
                    size="32px" 
                    onClick={() => isAdmin ? navigate(`${tab.value}`) : handleViewCart()}
                  />
                )}
              </li>
            ))}
          </ul>

          <Button 
            variant="secondary" 
            icon={PiSignOutBold} 
            size="32px" 
            onClick={handleSignOut}
          />
        </DesktopMenu>
      </nav>
    </Container>
  )
};