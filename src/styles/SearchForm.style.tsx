import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

export const SearchFormWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-top: 1.5rem;
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
`;

export const SearchFormHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const SearchFormLeft = styled.div`
  flex: 2;
  padding: 1rem 1.5rem;
`;

export const SearchFormRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchBarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  border: 1px solid gray;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const SearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 100%;
  background-color: hsl(0, 74%, 91%);
  border: none;
  color: hsl(120, 4%, 22%);
  font-weight: bold;
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translate(1px, 1px);
  }
`;

export const SearchBarIcon = styled(SearchIcon)`
  font-size: inherit;
`;

export const SearchFormImage = styled.img`
  width: 25rem;
  border-radius: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;
