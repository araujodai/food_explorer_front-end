import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [ search, setSearch ] = useState("");
  const [ noResults, setNoResults ] = useState(false);

  return (
    <SearchContext.Provider value={{ 
      search,
      setSearch,
      noResults,
      setNoResults
    }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  
  return context;
}

export { SearchProvider, useSearch };