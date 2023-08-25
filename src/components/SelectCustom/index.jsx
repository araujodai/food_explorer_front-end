import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { Container, SelectWrapper, Select } from "./styles";

export function SelectCustom({ title, id, ...rest }) {
  const options = [
    {label: "Entradas", value: "entrances"},
    {label: "Refeições", value: "meals"},
    {label: "Sobremesas", value: "desserts"},
    {label: "Bebidas", value: "drinks"},
    {label: "Porções", value: "portions"},
  ];

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
            options.map(option => (
              <option 
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))
          }
        </Select>

        {selectOpen ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
      </SelectWrapper>
    </Container>
  );
};

