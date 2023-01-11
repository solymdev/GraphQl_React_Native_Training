import React, { useEffect, useState } from "react"
import { useAllCharactersQuery, useAllEpisodesQuery } from "generated/graphql"
import { debounce } from "lodash"
import Typography from "components/Typography/Typography"
import { CharacterQuery } from "models/CharactersQuery"
import { TouchableOpacity, View, ScrollView } from "react-native"
import { styles } from "./SearchView.styles"
import { AnimationLoader } from "./components/AnimationLoader"
import { EpisodesQuery } from "models/episodesQuery"

export const SearchView = ({ navigation }) => {
  const [searchText, setSearchText] = useState("")
  const [isSkipEnabled, setSkip] = useState(true)
  const {
    data: charactersData,
    loading: charactersLoading,
    error: charactersError,
  } = useAllCharactersQuery({
    variables: {
      filter: { name: searchText },
    },
    skip: isSkipEnabled,
  })
  const {
    data: episodesData,
    loading: episodesLoading,
    error: episodesError,
  } = useAllEpisodesQuery({
    variables: {
      filter: { name: searchText },
    },
    skip: isSkipEnabled,
  })

  const changeTextDebouncer = debounce(() => searchFilterFunction, 500)

  const searchFilterFunction = (event) => {
    setSearchText(event.nativeEvent.text)
  }

  useEffect(() => {
    changeTextDebouncer()
  }, [searchText])

  const handleTextChange = (event) => {
    const { text } = event.nativeEvent
    if (text.length > 0) {
      setSkip(false)
      setSearchText(event.nativeEvent.text)
    } else {
      setSkip(true)
    }
  }

  useEffect(() => {
    navigation.setOptions({
      title: "Search",
      headerSearchBarOptions: {
        placeHolder: "Search character or episode",
        onChangeText: (event) => handleTextChange(event),
      },
    })
  }, [navigation])

  const navigateToCharacterInfo = (data: CharacterQuery) => {
    navigation.navigate("Character", data)
  }

  const navigateToEpisodeInfo = (data: EpisodesQuery) => {
    navigation.navigate("Episode", data)
  }

  if (episodesError || charactersError)
    return <Typography variant="paragraph" text={"Error"} />

  if (episodesLoading || charactersLoading) return <AnimationLoader />

  if (!episodesData || !charactersData) return <></>

  return (
    <ScrollView style={styles.searchViewContainer}>
      <Typography
        styleOverride={styles.charactersTitle}
        text="Characters"
        variant="H3"
        bold
      />
      <View style={styles.charactersList}>
        {charactersData.characters.results.slice(0, 4).map((character) => (
          <View key={character.id}>
            <TouchableOpacity
              style={styles.itemCell}
              onPress={() => navigateToCharacterInfo(character)}
            >
              <Typography variant="paragraph" text={character.name} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Typography
        styleOverride={styles.charactersTitle}
        text="Episodes"
        variant="H3"
        bold
      />
      <View style={styles.episodesList}>
        {episodesData.episodes.results.slice(0, 4).map((episode) => (
          <View key={episode.id}>
            <TouchableOpacity
              style={styles.itemCell}
              onPress={() => navigateToEpisodeInfo(episode)}
            >
              <Typography variant="paragraph" text={episode.name} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
