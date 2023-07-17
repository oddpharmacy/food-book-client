import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationContext, LocationContextProps } from "../state/location";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import {
  SearchResultsWrapper,
  SearchTitle,
} from "../styles/SearchResults.style";

interface ResultProp {
  name: string;
  image_url: string;
  rating: number;
  phone: string;
}

const SearchResults = () => {
  const { location } = useContext<LocationContextProps>(LocationContext);
  const tempLocation = { latitude: 40.7128, longitude: 74.006 };
  const currLocation = location || tempLocation;
  const { query } = useParams();
  const [results, setResults] = useState([]);

  const handleFetchResults = async () => {
    try {
      const results = await axios.post("http://localhost:8080/search/", {
        keyword: query,
        latitude: currLocation.latitude,
        longitude: currLocation.longitude,
      });

      console.log(results.data);
      setResults(results.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("im at search results");
    handleFetchResults();
  }, []);

  return (
    <SearchResultsWrapper>
      <SearchTitle>Showing results for {query}</SearchTitle>
      {results
        ? results.map((result: ResultProp) => {
            return (
              <RestaurantCard
                name={result.name}
                image={result["image_url"]}
                rating={result.rating}
                phone={result.phone}
              />
            );
          })
        : null}
    </SearchResultsWrapper>
  );
};

export default SearchResults;
