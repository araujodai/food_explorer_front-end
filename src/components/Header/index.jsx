import logoIcon from "../../assets/logo.svg";
import { PiReceiptBold } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import { Container, OpenCloseMenu, BrandWrapper, Cart } from "./styles";

export function Header() {
  return (
    <Container>
      <nav>
        <OpenCloseMenu>
          <button className="openMenu">
            <FiMenu size={24} />
          </button>

          <button className="closeMenu">
            <AiOutlineClose size={24} />
          </button>
        </OpenCloseMenu>

        <BrandWrapper>
          <img src={logoIcon} alt="Logo" />
          <h1>food explorer</h1>
        </BrandWrapper>

        <Cart>
          <button className="cart">
            <PiReceiptBold size={32} />
          </button>
          <div>
            <span>0</span>
          </div>
        </Cart>
      </nav>
    </Container>
  )
};