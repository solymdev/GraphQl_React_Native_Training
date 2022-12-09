import React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { Provider } from "react-redux"
import store from "./src/store"
import MainNavigator from "./src"

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </ApolloProvider>
  )
}
