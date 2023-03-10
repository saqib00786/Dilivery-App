import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Appearance } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
