import React, { useState } from "react"
import { View, Text, FlatList, ScrollView } from "react-native"
import {
  useAllCharactersQuery,
  useAllEpisodesQuery,
  AllEpisodesQuery,
  AllCharactersQuery,
} from "generated/graphql"
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

  const navigateToCharacterInfo = (data: CharacterQuery) => {
    navigation.navigate("Character", data)
  }

  const navigateToEpisodeInfo = (data: EpisodesQuery) => {
    navigation.navigate("Episode", data)
  }

  const renderCharacterCell = (data: CharacterQuery) => (
    <Cell
      data={data}
      title={data.name}
      subtitle={data.species}
      image={data.image}
      navigateToInfo={navigateToCharacterInfo}
    />
  )

  const renderEpisodeCell = (data: EpisodesQuery) => (
    <Cell
      data={data}
      title={data.name}
      subtitle={data.name}
      image={""}
      navigateToInfo={navigateToEpisodeInfo}
      withNumber
    />
  )

  const pushResultsCharacters = (
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

  const pushResultsEpisodes = (
    previousQueryResult: AllEpisodesQuery,
    newQueryResult: AllEpisodesQuery
  ) => ({
    ...previousQueryResult,
    episodes: {
      ...previousQueryResult.episodes,
      results: [
        ...previousQueryResult.episodes.results,
        ...newQueryResult.episodes.results,
      ],
      info: { ...newQueryResult.episodes.info },
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
            ) =>
              pushResultsCharacters(
                previousQueryResult,
                options.fetchMoreResult
              ),
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
        onEndReachedThreshold={1}
        onEndReached={async () => {
          setIsLoadingMore(true)
          await episodesFetchMore({
            variables: {
              page: episodesData.episodes.info.next,
            },
            updateQuery: (
              previousQueryResult: AllEpisodesQuery,
              options: {
                fetchMoreResult: AllEpisodesQuery
              }
            ) =>
              pushResultsEpisodes(previousQueryResult, options.fetchMoreResult),
          })
          setIsLoadingMore(false)
        }}
        horizontal
      ></FlatList>
    </ScrollView>
  )
}

/*const {
    data: episodesData,
    error: episodesError,
    loading: episodesLoading,
  } = useAllEpisodesQuery({ variables: { filter: { episode: "", name: "" } } }) */
