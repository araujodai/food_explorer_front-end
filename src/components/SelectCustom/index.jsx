import { useState, useEffect } from 'react';
import Select from 'react-select';

import { GoDotFill } from "react-icons/go";

import { Container, customStyles } from "./styles";

export const categories = [
  { label: "Entradas", value: "entrances" },
  { label: "Refeições", value: "meals" },
  { label: "Sobremesas", value: "desserts" },
  { label: "Bebidas", value: "drinks" },
  { label: "Porções", value: "portions" },
];

export const status = [
  { label: "Pendente", value: "pending" },
  { label: "Preparando", value: "preparing" },
  { label: "Entregue", value: "delivered" },
  { label: "Cancelado", value: "canceled" },
];

export function SelectCustom({ options, onChange, value, icon: Icon, className }) {
  const [ selectValue, setSelectValue ] = useState(null);

  function handleCategoryChange(selectedOption) {
    onChange(selectedOption.value);
  };

  useEffect(() => {
    if (value) {
      const selectedOption = options.find(option => option.value === value);
      setSelectValue(selectedOption);
    };
  }, [value]);

  return (
    <Container>
      <Select
        options={options}
        onChange={handleCategoryChange}
        isSearchable={false}
        placeholder="Selecione"
        styles={customStyles(Icon)}
        value={selectValue}
      />

      { Icon && 
        <GoDotFill className={className} size={16}/>
      }
    </Container>
  );
};