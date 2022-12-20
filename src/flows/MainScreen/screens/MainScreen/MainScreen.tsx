import React from "react"
import { View, Text, FlatList, ScrollView } from "react-native"
import {
  useAllCharactersQuery,
  useAllEpisodesQuery,
} from "../../../../generated/graphql"
import { Cell } from "./components/Cell"
import { Size } from "utils/size"
import { styles } from "./MainScreen.styles"
import { CharacterQuery } from "models/CharactersQuery"
import { EpisodesQuery } from "models/episodesQuery"

export const MainScreen = ({ navigation }) => {
  const {
    data: charactersData,
    error: charactersError,
    loading: charactersLoading,
  } = useAllCharactersQuery()
  const {
    data: episodesData,
    error: episodesError,
    loading: episodesLoading,
  } = useAllEpisodesQuery()
  /*const {
    data: episodesData,
    error: episodesError,
    loading: episodesLoading,
  } = useAllEpisodesQuery({ variables: { filter: { episode: "", name: "" } } }) */

  if (charactersLoading || episodesLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )

  if (episodesError || charactersError)
    return (
      <View>
        <Text>Error</Text>
      </View>
    )

  const navigateToInfo = (data: CharacterQuery) => {
    navigation.navigate("Character", data)
  }

  const renderCharacterCell = (data: CharacterQuery) => (
    <Cell
      data={data}
      title={data.name}
      subtitle={data.species}
      image={data.image}
      navigateToInfo={navigateToInfo}
    />
  )

  const renderEpisodeCell = (data: EpisodesQuery) => (
    <Cell
      data={data}
      title={data.name}
      subtitle={data.name}
      image={""}
      navigateToInfo={navigateToInfo}
    />
  )

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Characters</Text>
      <FlatList
        style={styles.flatListContainer}
        contentContainerStyle={{ paddingHorizontal: Size(5 / 2) }}
        data={charactersData.characters.results}
        renderItem={({ item }) => renderCharacterCell(item)}
        horizontal
      ></FlatList>
      <Text style={styles.title}>Episodes</Text>
      <FlatList
        style={styles.flatListContainer}
        contentContainerStyle={{ paddingHorizontal: Size(5 / 2) }}
        data={episodesData.episodes.results}
        renderItem={({ item }) => renderEpisodeCell(item)}
        horizontal
      ></FlatList>
    </ScrollView>
  )
}
