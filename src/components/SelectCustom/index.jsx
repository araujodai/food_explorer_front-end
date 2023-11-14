import { useState, useEffect } from 'react';
import Select from 'react-select';

import { Container, customStyles } from "./styles";

export const categories = [
  { label: "Entradas", value: "entrances" },
  { label: "Refeições", value: "meals" },
  { label: "Sobremesas", value: "desserts" },
  { label: "Bebidas", value: "drinks" },
  { label: "Porções", value: "portions" },
];

export function SelectCustom({ title, onChange, value }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategoryChange(selectedOption) {
    onChange(selectedOption.value);
  };

  useEffect(() => {
    if (value) {
      const selectedOption = categories.find(category => category.value === value);
      setSelectedCategory(selectedOption);
    };
  }, [value]);

  return (
    <Container>
      {title}

      <Select
        options={categories}
        onChange={handleCategoryChange}
        placeholder="Selecione"
        isSearchable={false}
        name="dishCategory"
        id="dishCategory"
        styles={customStyles}
        value={selectedCategory}
      />
    </Container>
  );
};