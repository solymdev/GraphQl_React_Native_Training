import React, { useRef } from "react"
import { View, Animated } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { styles } from "./EpisodesInfo.styles"
import { getRandomNumberInRange } from "utils/random"
import { Size } from "utils/size"
import Typography from "components/Typography/Typography"
import { ScrollView } from "react-native-gesture-handler"
import { CharacterQuery } from "models/CharactersQuery"
import { COLORS } from "utils/colors"
import { AnimationLoader } from "./components/AnimationLoader"
import { Cell } from "../MainScreen/components/Cell"
import { useAllEpisodesQuery } from "generated/graphql"

const Stack = createNativeStackNavigator()

const BANNER_H = Size(34)

export const EpisodesInfo = ({ navigation, route }) => {
  const { name, episode } = route.params

  const scrollA = useRef(new Animated.Value(0)).current

  const {
    data: episodesData,
    error: episodesError,
    loading: episodesLoading,
  } = useAllEpisodesQuery({
    variables: { filter: { episode: episode, name: name } },
  })

  if (episodesLoading) return <AnimationLoader />

  if (episodesError) return <></>

  const data = episodesData.episodes.results[0]

  const navigateToInfo = (data: CharacterQuery) =>
    navigation.navigate("Character", data)

  console.log(episodesData.episodes.results)

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
          style={animatedBannerStyle.profileImage(scrollA)}
          source={{
            uri: data.characters[
              getRandomNumberInRange(0, data.characters.length - 1)
            ].image,
          }}
        />
        <View style={styles.scrollableCard}>
          <Typography variant="H1" text={name} bold />
          <Typography
            variant="H3"
            text={episode}
            styleOverride={styles.paddingTitle}
          />
          <Typography variant="H3" text={"Air Date"} />
          <Typography variant="H2" text={data.air_date} bold />
          <View style={styles.titleContainer}>
            <Typography
              styleOverride={styles.charactersTitle}
              variant="H2"
              text={"Characters"}
              bold
            />
            <Typography
              styleOverride={styles.countTitle}
              text={String(data.characters.length)}
              variant="H2"
              color={COLORS.secondary}
            />
          </View>
          <ScrollView horizontal>
            {data.characters.map((character: CharacterQuery) => (
              <Cell
                key={character.id}
                data={character}
                title={character.name}
                subtitle={character.name}
                image={character.image}
                navigateToInfo={() => navigateToInfo(character)}
              />
            ))}
          </ScrollView>
        </View>
      </Animated.ScrollView>
      <Typography
        styleOverride={styles.noMoreTitle}
        variant="paragraph"
        text={"Nothing more to see"}
      />
    </View>
  )
}

const animatedBannerStyle = {
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
