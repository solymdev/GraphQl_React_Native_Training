import React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { Provider } from "react-redux"
import store from "./src/store/store"
import { NavigationContainer } from "@react-navigation/native"
import { GRAPHQL_REPO_URL } from "./src/utils/constants"
import MainNavigator from "./src"

const client = new ApolloClient({
  uri: GRAPHQL_REPO_URL,
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  )
}
