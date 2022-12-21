import React, { useState } from "react"
import { View, Text, FlatList, ScrollView } from "react-native"
import {
  useAllCharactersQuery,
  useAllEpisodesQuery,
  AllCharactersQuery,
} from "../../../../generated/graphql"
import { Cell } from "./components/Cell"
import { Size } from "utils/size"
import Typography from "components/Typography/Typography"
import { styles } from "./MainScreen.styles"
import { CharacterQuery } from "models/CharactersQuery"
import { EpisodesQuery } from "models/episodesQuery"
import { COLORS } from "utils/colors"

export const MainScreen = ({ navigation }) => {
  const {
    data: charactersData,
    error: charactersError,
    loading: charactersLoading,
    fetchMore: charactersFetchMore,
  } = useAllCharactersQuery()
  const {
    data: episodesData,
    error: episodesError,
    loading: episodesLoading,
    fetchMore: episodesFetchMore,
  } = useAllEpisodesQuery()
  /*const {
    data: episodesData,
    error: episodesError,
    loading: episodesLoading,
  } = useAllEpisodesQuery({ variables: { filter: { episode: "", name: "" } } }) */

  const [isLoadingMore, setIsLoadingMore] = useState(false)

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
      withNumber
    />
  )

  const pushResults = (
    previousQueryResult: AllCharactersQuery,
    newQueryResult: AllCharactersQuery
  ) => ({
    ...previousQueryResult,
    characters: {
      ...previousQueryResult.characters,
      results: [
        ...previousQueryResult.characters.results,
        ...newQueryResult.characters.results,
      ],
      info: { ...newQueryResult.characters.info },
    },
  })

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Characters</Text>
        <Typography
          text={charactersData.characters.info.count.toString()}
          variant="H2"
          color={COLORS.secondary}
        />
      </View>
      <FlatList
        style={styles.flatListContainer}
        contentContainerStyle={{ paddingHorizontal: Size(5 / 2) }}
        data={charactersData.characters.results}
        renderItem={({ item }) => renderCharacterCell(item)}
        onEndReachedThreshold={1}
        onEndReached={async () => {
          setIsLoadingMore(true)
          await charactersFetchMore({
            variables: {
              page: charactersData.characters.info.next,
            },
            updateQuery: (
              previousQueryResult: AllCharactersQuery,
              options: {
                fetchMoreResult: AllCharactersQuery
              }
            ) => pushResults(previousQueryResult, options.fetchMoreResult),
          })
          setIsLoadingMore(false)
        }}
        horizontal
      ></FlatList>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Episodes</Text>
        <Typography
          text={episodesData.episodes.info.count.toString()}
          variant="H2"
          color={COLORS.secondary}
        />
      </View>
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
