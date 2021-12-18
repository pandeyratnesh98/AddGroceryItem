import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator, Caption, FAB } from "react-native-paper";
import styled from "styled-components";
import { SearchBar } from "../../components/SearchBar.component";
import { SearchContext } from "../../infrastructure/services/search/Search.context";
import { GroceryItem } from "./components/GroceryItem.component";
const GroceryList = styled(FlatList)`
  margin-top: 15px;
`;
const RowLayout = styled(View)`
  margin-top: 15px;
  flex-direction: row;
`;

const ErrorText = styled(Caption)`
  color: red;
  text-align: center;
  margin-top: 15px;
`;
const IndicatorContainer = styled(View)`
  width: 50px;
  height: 50px;
  background-color: white;
  position: absolute;
  z-index: 100;
  justify-content: center;
  align-items: center;
  align-self: center;
  top: 50%;
  bottom: 50%;
`;

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, err, isLoading, onAddItem, onSearch } =
    useContext(SearchContext);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    onSearch(searchQuery, setFilteredData);
  }, [onSearch, searchQuery]);
  const Container = styled(View)`
    flex: 1;
  `;
  return (
    <Container>
      <RowLayout>
        <SearchBar
          placeholder="Search Item"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
        <FAB icon="plus" onPress={() => onAddItem()} color="#fff" />
      </RowLayout>
      {err ? <ErrorText>{err}</ErrorText> : null}

      <GroceryList
        data={filteredData}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <GroceryItem title={item} />}
      />
      {isLoading && (
        <IndicatorContainer>
          <ActivityIndicator animating={isLoading} color="#0cf2b1" />
        </IndicatorContainer>
      )}
    </Container>
  );
};
