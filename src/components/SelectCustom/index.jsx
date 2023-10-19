import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { Container, SelectWrapper, Select } from "./styles";

export const options = [
  {label: "Entradas", value: "entrances"},
  {label: "Refeições", value: "meals"},
  {label: "Sobremesas", value: "desserts"},
  {label: "Bebidas", value: "drinks"},
  {label: "Porções", value: "portions"},
];

export function SelectCustom({ title, id, ...rest }) {
  // const categories = [
  //   {label: "Entradas", value: "entrances"},
  //   {label: "Refeições", value: "meals"},
  //   {label: "Sobremesas", value: "desserts"},
  //   {label: "Bebidas", value: "drinks"},
  //   {label: "Porções", value: "portions"},
  // ];

  const categories = options;

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
      <label>{title}</label>
      <SelectWrapper >
        <Select 
          required 
          {...rest} 
          ref={selectRef} 
          onClick={toggleDropdown}
        >
          {
            categories.map(category => (
              <option 
                key={category.value}
                label={category.label}
                value={category.value}
              />
            ))
          }
        </Select>

        {selectOpen ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
      </SelectWrapper>
    </Container>
  );
};

