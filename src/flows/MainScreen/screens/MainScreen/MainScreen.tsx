import React from "react"
import { View, Text, FlatList, ScrollView } from "react-native"
import {
  useAllEpisodesQuery,
  AllEpisodesQuery,
  AllCharactersQuery,
  useCharactersGeneralInfoQuery,
  useEpisodesGeneralInfoQuery,
} from "generated/graphql"
import { Cell } from "./components/Cell"
import { Size } from "utils/size"
import Typography from "components/Typography/Typography"
import { styles } from "./MainScreen.styles"
import { CharacterQuery } from "models/CharactersQuery"
import { EpisodesQuery } from "models/episodesQuery"
import { COLORS } from "utils/colors"
import { AnimationLoader } from "./components/AnimationLoader"

export const MainScreen = ({ navigation }) => {
  const {
    data: charactersData,
    error: charactersError,
    loading: charactersLoading,
    fetchMore: charactersFetchMore,
  } = useCharactersGeneralInfoQuery()

  const {
    data: episodesData,
    error: episodesError,
    loading: episodesLoading,
    fetchMore: episodesFetchMore,
  } = useEpisodesGeneralInfoQuery()

  if (charactersLoading || episodesLoading)
    return (
      <View style={styles.loadingContainer}>
        <AnimationLoader />
      </View>
    )

  if (episodesError || charactersError)
    return (
      <View style={styles.errorContainer}>
        <Text>Ups... something went wrong</Text>
      </View>
    )

  const navigate = (
    screenName: string,
    data: CharacterQuery | EpisodesQuery
  ) => {
    navigation.navigate(screenName, data)
  }

  const pushResults = (
    previousQueryResult: AllCharactersQuery | AllEpisodesQuery,
    newQueryResult: AllCharactersQuery | AllEpisodesQuery
  ) => {
    const queryKey = previousQueryResult.hasOwnProperty("episodes")
      ? "episodes"
      : "characters"

    console.log(queryKey)

    return {
      ...previousQueryResult,
      [queryKey]: {
        ...previousQueryResult[queryKey],
        results: [
          ...previousQueryResult[queryKey].results,
          ...newQueryResult[queryKey].results,
        ],
        info: { ...newQueryResult[queryKey].info },
      },
    }
  }

  const fetchNextPageCharacters = () => {
    charactersFetchMore({
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
  }

  const fetchNextPageEpisodes = () => {
    episodesFetchMore({
      variables: {
        page: episodesData.episodes.info.next,
      },
      updateQuery: (
        previousQueryResult: AllEpisodesQuery,
        options: {
          fetchMoreResult: AllEpisodesQuery
        }
      ) => pushResults(previousQueryResult, options.fetchMoreResult),
    })
  }

  const characterCell = ({ item }) => (
    <Cell
      data={item}
      title={item.name}
      subtitle={item.species}
      image={item.image}
      navigateToInfo={() => navigate("Character", item)}
    />
  )

  const episodeCell = ({ item }) => (
    <Cell
      data={item}
      title={item.name}
      subtitle={item.episode}
      image={""}
      navigateToInfo={() => navigate("Episode", item)}
      withNumber
    />
  )

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
        renderItem={characterCell}
        onEndReachedThreshold={1}
        onEndReached={fetchNextPageCharacters}
        keyExtractor={(item) => item.id}
        horizontal
      />
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
        renderItem={episodeCell}
        onEndReachedThreshold={1}
        onEndReached={fetchNextPageEpisodes}
        horizontal
      />
    </ScrollView>
  )
}
