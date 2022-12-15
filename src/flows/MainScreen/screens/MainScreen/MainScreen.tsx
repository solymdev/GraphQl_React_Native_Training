import React from "react"
import { View, Text, FlatList } from "react-native"
import { useAllCharactersQuery } from "../../../../generated/graphql"
import { Cell } from "./components/Cell"
import { CharacterQuery } from "models/CharactersQuery"
import { styles } from "./MainScreen.styles"

export const MainScreen = ({ navigation }) => {
  const { data, error, loading } = useAllCharactersQuery()

  if (error)
    return (
      <View>
        <Text>Error</Text>
      </View>
    )

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )

  const navigateToInfo = (data: CharacterQuery) => {
    navigation.navigate("Second", data)
  }

  const renderItem = (data: CharacterQuery) => (
    <Cell data={data} navigateToInfo={navigateToInfo} />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Characters</Text>
      <FlatList
        style={styles.flatListContainer}
        data={data.characters.results}
        renderItem={({ item }) => renderItem(item)}
        horizontal
      ></FlatList>
      <Text style={styles.title}>Episodes</Text>
      <FlatList
        style={styles.flatListContainer}
        data={data.characters.results}
        renderItem={({ item }) => renderItem(item)}
        horizontal
      ></FlatList>
    </View>
  )
}
