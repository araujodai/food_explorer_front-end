import { useState, useEffect } from 'react';
import Select, { components } from 'react-select';

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
  { label: "Pendente", value: "pending", description: "Aguardando pagamento no caixa." },
  { label: "Preparando", value: "preparing", description: "Pagamento aprovado!" },
  { label: "Entregue", value: "delivered", description: "Pedido entregue!" },
  { label: "Cancelado", value: "canceled", description: "Pedido cancelado." },
];

export function SelectCustom({ options, onChange, value, icon: Icon, disabled = false }) {
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
    <Container disabled={disabled}>

      { disabled ? (
        <span>
          <GoDotFill className={value} />
          {selectValue?.label}
        </span>
      ) : (
        <Select
          options={options}
          onChange={handleCategoryChange}
          isSearchable={false}
          placeholder="Selecione"
          styles={customStyles(Icon)}
          value={selectValue}
          components={{
            SingleValue: ({ children, ...props }) => (
              <components.SingleValue {...props}>
                {Icon && <GoDotFill className={value} size={16} />}
                {children}
              </components.SingleValue>
            ),
          }}
        />
      )}

    </Container>
  );
};