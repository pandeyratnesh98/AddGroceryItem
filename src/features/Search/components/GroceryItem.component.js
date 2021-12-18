import React from "react";
import { Text, View } from "react-native";
import { Title } from "react-native-paper";
import styled from "styled-components";
const ItemView = styled(View)`
  align-items: center;
  height: 60px;
  margin: 5px;
  background-color: #f1f1f1;
  justify-content: center;
`;
export const GroceryItem = ({ title }) => {
  return (
    <ItemView>
      <Title>{title}</Title>
    </ItemView>
  );
};
