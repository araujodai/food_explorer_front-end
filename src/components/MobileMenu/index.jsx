import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import { Footer } from "../Footer";
import { Input } from "../Input";

import { Container, NavWrapper, Mobile } from "./styles";

export function MobileMenu({ isAdmin = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationTabs = [
    {name: "Meus favoritos", value: "#", isAdmin: false},
    {name: "Novo prato", value: "#", isAdmin: true},
    {name: "Pedidos", value: "#", isAdmin: true},
  ];

  function handleOpenCloseMobileMenu() {
    setIsOpen(prevState => !prevState)
  };

  return (
    <Container>
      <button className="openMenu" onClick={handleOpenCloseMobileMenu}>
        <FiMenu size={24} />
      </button>

      {
        isOpen &&
        <Mobile>
          <header>
            <button onClick={handleOpenCloseMobileMenu}>
              <AiOutlineClose size={24} />
            </button>
            <h1>Menu</h1>
          </header>

          <NavWrapper>
            <Input 
              icon={FiSearch}
              placeholder="Busque por pratos ou ingredientes"
            />

            <ul>
              {
                navigationTabs.filter(tab => tab.isAdmin == isAdmin)
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
        </Mobile>
      }

    </Container>
  )
};