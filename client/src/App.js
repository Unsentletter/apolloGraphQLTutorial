import React, { Component } from 'react';
import {
  makeExecutableSchema,
} from 'graphql-tools';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

import './App.css';
import ChannelsListWithData from './components/ChannelsListWithData';
import { typeDefs } from './schema';

const schema = makeExecutableSchema({ typeDefs });

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  networkInterface
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">React + GraphQL Tutorial</div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;