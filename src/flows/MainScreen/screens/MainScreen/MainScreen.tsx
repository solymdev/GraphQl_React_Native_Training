import React from "react"
import { View, Text, ScrollView } from "react-native"
import { FlashList } from "@shopify/flash-list"
import {
  AllEpisodesQuery,
  AllCharactersQuery,
  useCharactersGeneralInfoQuery,
  useEpisodesGeneralInfoQuery,
} from "generated/graphql"
import { Cell } from "./components/Cell"
import { Size } from "utils/size"
import Typography from "components/Typography/Typography"
import { styles } from "./MainScreen.styles"
import { CharacterQueryGeneral } from "models/CharactersQuery"
import { EpisodesQueryGeneral } from "models/episodesQuery"
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
    data: CharacterQueryGeneral | EpisodesQueryGeneral
  ) => navigation.navigate(screenName, data)

  const pushResults = (
    previousQueryResult: AllCharactersQuery | AllEpisodesQuery,
    newQueryResult: AllCharactersQuery | AllEpisodesQuery
  ) => {
    const queryKey = previousQueryResult.hasOwnProperty("episodes")
      ? "episodes"
      : "characters"

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
    <View style={styles.cellContainer}>
      <Cell
        data={item}
        title={item.name}
        subtitle={item.species}
        image={item.image}
        navigateToInfo={() => navigate("Character", item)}
      />
    </View>
  )

  const episodeCell = ({ item }) => (
    <View style={styles.cellContainer}>
      <Cell
        data={item}
        title={item.name}
        subtitle={item.episode}
        navigateToInfo={() => navigate("Episode", item)}
      />
    </View>
  )

  const characters = charactersData.characters.results

  const episodes = episodesData.episodes.results

  const episodesDataCount = episodesData.episodes.info.count.toString()

  const charactersDataCount = charactersData.characters.info.count.toString()

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Characters</Text>
        <Typography
          text={charactersDataCount}
          variant="H2"
          color={COLORS.secondary}
        />
      </View>
      <FlashList
        contentContainerStyle={{ paddingHorizontal: Size(5 / 2) }}
        data={characters}
        renderItem={characterCell}
        onEndReachedThreshold={1}
        onEndReached={fetchNextPageCharacters}
        keyExtractor={(item) => item.name}
        estimatedItemSize={90}
        horizontal
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Episodes</Text>
        <Typography
          text={episodesDataCount}
          variant="H2"
          color={COLORS.secondary}
        />
      </View>
      <FlashList
        contentContainerStyle={{ paddingHorizontal: Size(5 / 2) }}
        data={episodes}
        renderItem={episodeCell}
        onEndReachedThreshold={1}
        onEndReached={fetchNextPageEpisodes}
        keyExtractor={(item) => item.id}
        estimatedItemSize={90}
        horizontal
      />
    </ScrollView>
  )
}
