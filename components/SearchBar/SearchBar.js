import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import RecipeList from "../RecipeList/RecipeList";
import {
  SearchContainer,
  SearchInput,
  ClearButton,
  Notice,
} from "./SearchBar.styles";

export default function SearchBar({ gridColumns }) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    const storedSearchTerm = sessionStorage.getItem("lastSearchTerm");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    sessionStorage.setItem("lastSearchTerm", value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    sessionStorage.removeItem("lastSearchTerm");
    focusSearchInput();
  };

  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const { data: searchResults, error } = useSWR(
    searchTerm ? `/api/recipes?query=${searchTerm}` : null
  );

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Suche nach Rezepten..."
          value={searchTerm || ""}
          onChange={handleSearch}
          ref={searchInputRef}
        />
        {searchTerm && <ClearButton onClick={clearSearch} />}
      </SearchContainer>
      {searchTerm && (
        <>
          {error && <Notice>Fehler beim Laden der Suchergebnisse</Notice>}
          {!error && searchResults && searchResults.length > 0 ? (
            <RecipeList
              gridColumns={gridColumns}
              filteredRecipes={searchResults}
            />
          ) : (
            <Notice>Keine Rezepte gefunden</Notice>
          )}
        </>
      )}
    </>
  );
}
