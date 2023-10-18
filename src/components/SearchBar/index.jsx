import { useSearch } from "../../hooks/search";

import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import { Input } from "../Input";
import { Button } from "../Button";

import { Container } from "./styles";

export function SearchBar({ onKeyPress }) {
  const { search, setSearch } = useSearch();

  function handleClearSearch() {
    setSearch("");
  };

  return (
    <Container>
      <Input 
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={onKeyPress}
      />

      {
        search &&
        <Button 
          variant="secondary"
          icon={AiOutlineClose}
          size="22px"
          onClick={handleClearSearch}
        />
      }
    </Container>
  );
};