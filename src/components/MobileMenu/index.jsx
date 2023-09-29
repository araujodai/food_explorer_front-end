import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import { Button } from "../Button";
import { Input } from "../Input";
import { Footer } from "../Footer";

import { Container, NavWrapper } from "./styles";

export function MobileMenu({ isAdmin = false, tabs }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenCloseMobileMenu() {
    setIsOpen(prevState => !prevState)
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
            <Input 
              icon={FiSearch}
              placeholder="Busque por pratos ou ingredientes"
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