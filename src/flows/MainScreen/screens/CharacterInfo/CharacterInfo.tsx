import React, { useRef } from "react"
import { View, Text, Animated } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { styles } from "./CharacterInfo.styles"
import { Size } from "utils/size"
import Typography from "components/Typography/Typography"
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()

const BANNER_H = Size(34)

export const CharacterInfo = ({ navigation, route }) => {
  console.log(route.params)

  const { image, name, gender, species, status, origin } = route.params

  const getDimension = origin && origin.dimension ? origin.dimension : "Unknown"

  const getType = origin && origin.type ? origin.type : "Unknown"

  const scrollA = useRef(new Animated.Value(0)).current

  const genderCharacter =
    gender === "Female"
      ? { name: "female-outline", color: "pink" }
      : { name: "man-outline", color: "blue" }

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
          source={{ uri: image }}
        />
        <View style={styles.scrollableCard}>
          <View style={styles.titleContainer}>
            <Typography
              variant="H1"
              styleOverride={styles.titleName}
              text={name}
              bold
            />
            <Ionicons
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
            text={status}
            bold
            styleOverride={styles.paddingTitle}
          />
          <Typography variant="H3" text={"Ubication"} />
          <Typography variant="H2" text={"Dimention: " + getDimension} bold />
          <Typography variant="H2" text={"Type: " + getType} bold />
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
