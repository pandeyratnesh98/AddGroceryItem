import React, { createContext, useState } from "react";
import { RANDOM_FRUITS } from "./Search.data";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const onAddItem = () => {
    setIsLoading(true);
    setErr("");
    try {
      const index = Math.floor(Math.random() * RANDOM_FRUITS.length);
      const groceryToAdd = RANDOM_FRUITS[index];
      setData([...data, groceryToAdd]);
    } catch (err) {
      setIsLoading(false);
      setErr(err);
    }
  };
  const onSearch = (query, setFilteredData) => {
    setIsLoading(true);
    setErr("");
    const filteredData = data.filter((el) => el.includes(query));
    if (filteredData.length > 0) {
      setFilteredData(filteredData);
      setIsLoading(false);
    } else {
      setErr("No Data Found");
      setIsLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{ data, err, isLoading, onAddItem, onSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
