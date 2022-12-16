import React from "react"
import { View, Text, FlatList, ScrollView } from "react-native"
import { useAllCharactersQuery } from "../../../../generated/graphql"
import { Cell } from "./components/Cell"
import { Size } from "utils/size"
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
    navigation.navigate("Character", data)
  }

  const renderItem = (data: CharacterQuery) => (
    <Cell data={data} navigateToInfo={navigateToInfo} />
  )

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Characters</Text>
      <FlatList
        style={styles.flatListContainer}
        contentContainerStyle={{ paddingHorizontal: Size(5 / 2) }}
        data={data.characters.results}
        renderItem={({ item }) => renderItem(item)}
        horizontal
      ></FlatList>
      <Text style={styles.title}>Episodes</Text>
      <FlatList
        style={styles.flatListContainer}
        contentContainerStyle={{ paddingHorizontal: Size(5 / 2) }}
        data={data.characters.results}
        renderItem={({ item }) => renderItem(item)}
        horizontal
      ></FlatList>
    </ScrollView>
  )
}
