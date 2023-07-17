import React, { useState } from "react";
import {
  SearchFormWrapper,
  SearchFormHeading,
  SearchFormLeft,
  SearchFormRight,
  SearchBarWrapper,
  SearchBar,
  SearchButton,
  SearchBarIcon,
  SearchFormImage,
} from "../styles/SearchForm.style";
import { useNavigate } from "react-router-dom";
import Location from "./Location";

const SearchForm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleNavigate = () => {
    console.log("navigating...");
    if (searchQuery && searchQuery !== "") {
      const query = searchQuery.toLowerCase();
      navigate(`/search/${query}`);
    }
  };

  return (
    <SearchFormWrapper>
      <SearchFormLeft>
        <SearchFormHeading>
          Explore Your Next Culinary Adventure
        </SearchFormHeading>
        <SearchBarWrapper>
          <SearchBarIcon />
          <SearchBar
            type="text"
            placeholder="Location, Restaurant, or Cuisine"
            value={searchQuery}
            onChange={(input) => setSearchQuery(input.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") handleNavigate();
            }}
          />
        </SearchBarWrapper>
        <SearchButton onClick={() => handleNavigate()}>Search</SearchButton>
        <Location />
      </SearchFormLeft>
      <SearchFormRight>
        <SearchFormImage src="src/assets/ice-cream.png" alt="ice cream" />
        {/* Image courtesy of ian dooley */}
      </SearchFormRight>
    </SearchFormWrapper>
  );
};

export default SearchForm;
