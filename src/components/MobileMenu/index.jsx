import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";
import { SearchBar } from "../SearchBar";
import { Footer } from "../Footer";

import { Container, NavWrapper } from "./styles";

export function MobileMenu({ isAdmin = false, tabs }) {
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
              {
                tabs.filter(tab => tab.isAdmin == isAdmin)
                .map(tab => (
                  <li key={tab.name}>
                    <a href={tab.value}>{tab.name}</a>
                  </li>
                ))
              }

              <li>
                <a href="#">Sair</a>
              </li>
            </ul>
          </NavWrapper>

          <Footer />
        </div>
      }

    </Container>
  )
};