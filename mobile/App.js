import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from "react";

import Screens from './src/screens/index';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/api/',
  //uri: 'http://192.168.1.113:4000/api',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
  </ApolloProvider>
  );
}