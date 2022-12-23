import React, { useRef } from "react"
import { View, Text, Animated } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { styles } from "./EpisodesInfo.styles"
import { getRandomNumberInRange } from "utils/random"
import { Size } from "utils/size"
import Typography from "components/Typography/Typography"

const Stack = createNativeStackNavigator()

const BANNER_H = Size(34)

export const EpisodesInfo = ({ navigation, route }) => {
  console.log(route.params)

  const { name, characters } = route.params

  const scrollA = useRef(new Animated.Value(0)).current

  return (
    <View>
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
          source={{
            uri: characters[getRandomNumberInRange(0, characters.length - 1)]
              .image,
          }}
        />
        <View style={styles.scrollableCard}>
          <Typography variant="H1" text={name} bold />
        </View>
      </Animated.ScrollView>
      <Text style={{ position: "absolute", bottom: Size(1) }}>
        Nothing more to see
      </Text>
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
