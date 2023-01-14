import React, { useRef } from "react"
import { View, Text, Animated, ScrollView } from "react-native"
import { styles } from "./CharacterInfo.styles"
import { Size } from "utils/size"
import { EpisodesQuery } from "models/episodesQuery"
import { Cell } from "../MainScreen/components/Cell"
import { useAllCharactersQuery } from "generated/graphql"
import Typography from "components/Typography/Typography"
import { IconAngle } from "tabler-icons-react-native"
import { AnimationLoader } from "./components/AnimationLoader"
import ErrorView from "components/ErrorView.tsx"

const BANNER_H = Size(34)

export const CharacterInfo = ({ navigation, route }) => {
  const { name, species } = route.params

  const scrollA = useRef(new Animated.Value(0)).current

  const {
    data: charactersData,
    error: charactersError,
    loading: charactersLoading,
  } = useAllCharactersQuery({
    variables: { filter: { name: name, species: species } },
  })

  if (charactersError) return <ErrorView />

  if (charactersLoading) return <AnimationLoader />

  const data = charactersData.characters.results[0]

  const getDimension =
    data.origin && data.origin.dimension ? data.origin.dimension : "Unknown"

  const getType = data.origin && data.origin.type ? data.origin.type : "Unknown"

  const genderCharacter =
    data.gender === "Female"
      ? { name: "female-outline", color: "pink" }
      : { name: "man-outline", color: "blue" }

  const episodeCell = (item) => (
    <Cell
      data={item}
      title={item.name}
      subtitle={item.name}
      image={""}
      navigateToInfo={() => navigateToEpisodeInfo(item)}
    />
  )

  const navigateToEpisodeInfo = (data: EpisodesQuery) => {
    navigation.navigate("Episode", data)
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={{ zIndex: 2 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <Animated.Image
          style={style.profileImage(scrollA)}
          source={{ uri: data.image }}
        />
        <View style={styles.scrollableCard}>
          <View style={styles.titleContainer}>
            <Typography
              variant="H1"
              styleOverride={styles.titleName}
              text={name}
              bold
            />
            <IconAngle
              // @ts-ignore
              name={genderCharacter.name}
              size={Size(4)}
              color={genderCharacter.color}
            />
          </View>
          <Typography variant="H3" text={"Specie"} />
          <Typography
            variant="H2"
            styleOverride={styles.paddingTitle}
            text={species}
            bold
          />
          <Typography variant="H3" text={"Status"} />
          <Typography
            variant="H2"
            text={data.status}
            bold
            styleOverride={styles.paddingTitle}
          />
          <Typography variant="H3" text={"Location"} />
          <Typography variant="H2" text={"Dimention: " + getDimension} bold />
          <Typography
            variant="H2"
            styleOverride={styles.paddingTitle}
            text={"Type: " + getType}
            bold
          />
          <View style={styles.episodesContainer}>
            <Typography
              variant="H3"
              styleOverride={styles.episodeTitle}
              text={"Episodes"}
            />
            <Typography
              variant="H3"
              text={data.episode.length.toString()}
              color={"gray"}
            />
          </View>
          <ScrollView horizontal>
            {data.episode.map((episode) => (
              <View key={episode.id}>{episodeCell(episode)}</View>
            ))}
          </ScrollView>
        </View>
      </Animated.ScrollView>
      <Text style={styles.noMoreTitle}>Nothing more to see</Text>
    </View>
  )
}

const style = {
  profileImage: (scrollA) => ({
    width: "100%",
    borderTopLeftRadius: Size(1),
    borderTopRightRadius: Size(1),
    height: BANNER_H,
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
}
