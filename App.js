import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import { SearchScreen } from "./src/features/Search/Search.screen";
import { SearchContextProvider } from "./src/infrastructure/services/search/Search.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding: 10px;
`;

export default function App() {
  return (
    <SafeArea>
      <SearchContextProvider>
        <SearchScreen />
        <StatusBar style="auto" />
      </SearchContextProvider>
    </SafeArea>
  );
}
