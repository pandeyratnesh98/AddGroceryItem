import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const Search = styled(Searchbar)`
  margin-end: 10px;
  width: 85%;
`;

export const SearchBar = (props) => {
  return <Search {...props} />;
};
