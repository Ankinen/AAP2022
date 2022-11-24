import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Screens from './src/screens/index';

export default function App() {
  return (
  <NavigationContainer>
    <Screens />
  </NavigationContainer>
  );
}