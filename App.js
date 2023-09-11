
import Router from './src/Router';
import { NativeBaseProvider } from "native-base";
import Apollo from './src/Apollo';
import { ApolloProvider } from '@apollo/client';
import client from './src/Apollo';
export default function App() {
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <Router></Router>
      </ApolloProvider>
    </NativeBaseProvider>
  );
}

