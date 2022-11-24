// This is the main entry point of our application
import React from 'react';
import ReactDOM from 'react-dom';

// import Apollo client libraries
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

import { setContext } from 'apollo-link-context';

// import global styles
import GlobalStyle from './components/GlobalStyle';

// import routes
import Pages from '/pages';

// configure the API URI and cache
const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

// check the token and return the headers to the context
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            //...headers,
            authorization: localStorage.getItem('token') || ''
        }
    };
});

// configure Apollo Client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    resolvers: {},
    connectToDevTools: true
});

// check for a local token
const data = {
    isLoggedIn: !!localStorage.getItem('token')
};

// write the cache data on intial load
cache.writeData({ data });
// write the cache data after cache is reset
client.onResetStore(() => cache.writeData({ data }));

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Pages />
        </ApolloProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));