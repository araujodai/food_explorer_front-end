import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { Container, SelectWrapper, SelectCustom } from "./styles";

export const categories = [
  {label: "Entradas", value: "entrances"},
  {label: "Refeições", value: "meals"},
  {label: "Sobremesas", value: "desserts"},
  {label: "Bebidas", value: "drinks"},
  {label: "Porções", value: "portions"},
];

export function Select({ onChange }) {
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef(null);

  function toggleDropdown() {
    setSelectOpen(prevState => !prevState);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setSelectOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <label>Categoria</label>

      <SelectWrapper >
        <SelectCustom 
          ref={selectRef} 
          required
          onChange={onChange}
          onClick={toggleDropdown}
        >
          <option disabled selected>Selecione</option>
          {
            categories.map(category => (
              <option 
                key={category.value}
                label={category.label}
                value={category.value}
              />
            ))
          }
        </SelectCustom>

        {selectOpen ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
      </SelectWrapper>
    </Container>
  );
};

