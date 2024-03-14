import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";
import { SearchBar } from "../SearchBar";
import { Footer } from "../Footer";

import { useAuth } from "../../hooks/auth";

import { Container, NavWrapper } from "./styles";

export function MobileMenu({ tabs }) {
  const { signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  function handleOpenCloseMobileMenu() {
    setIsOpen(prevState => !prevState)
  };

  function handleSearchResults(event) {
    if(event.key === "Enter" || event.type === "click") {
      if (!isHome) {
        navigate("/");

      } else {
        setIsOpen(prevState => !prevState);
      };
    };
  };

  function handleSignOut() {
    navigate("/");
    signOut();
  };

  return (
    <Container>

      <Button 
        variant="secondary"
        icon={FiMenu} 
        size="24px" 
        onClick={handleOpenCloseMobileMenu} 
        className="openMenu"
      />

      {
        isOpen &&
        <div className="menu">
          <header>
            <Button 
              variant="secondary"
              icon={AiOutlineClose} 
              size="24px" 
              onClick={handleOpenCloseMobileMenu} 
            />

            <h1>Menu</h1>
          </header>

          <NavWrapper>
            <SearchBar 
              onKeyPress={handleSearchResults}
            />

            <ul>
              {tabs
                .filter(tab => tab.name !== "Pedidos")
                .map(tab => (
                  <li key={tab.name}>
                    <Link to={tab.value}>{tab.name}</Link>
                  </li>
              ))}

              <li onClick={handleSignOut}>
                <span>Sair</span>
              </li>
            </ul>
          </NavWrapper>
          <Footer />
        </div>
      }

    </Container>
  )
};