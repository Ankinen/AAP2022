import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import * as SecureStore from 'expo-secure-store';
import React from "react";

import Screens from './src/screens/index';

const uri = 'http://192.168.1.113:4000/api';

const httpLink = createHttpLink({ uri: uri });

const authLink = setContext(async(_, { headers }) => {
  return{ 
    headers: {
      ...headers, 
      authorization: (await SecureStore.getItemAsync('token')) || ''
    }
  }
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: 'include'
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