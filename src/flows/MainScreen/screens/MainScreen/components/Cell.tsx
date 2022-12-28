import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { CharacterQueryGeneral } from "models/CharactersQuery"
import { styles } from "./Cell.styles"
import { EpisodesQueryGeneral } from "models/episodesQuery"
import { LinearGradient } from "expo-linear-gradient"
import { getRandomNumberInRange } from "utils/random"
import Typography from "components/Typography/Typography"

type CellProps = {
  data: CharacterQueryGeneral | EpisodesQueryGeneral
  title: string
  subtitle: string
  image?: string
  navigateToInfo: (data) => void
}

export const Cell = ({
  data,
  title,
  subtitle,
  image,
  navigateToInfo,
}: CellProps) => {
  const gradients = [
    ["#B0FBEA", "#CDFDF2"],
    ["#FFD0AA", "#FFE1C9"],
    ["#C1CFFF", "#D5DEFF"],
    ["#F0D6FF", "#F4E1FF"],
  ]

  return (
    <TouchableOpacity style={styles.item} onPress={() => navigateToInfo(data)}>
      <View
        style={
          image ? styles.graphicContainer : styles.graphicContainerWithNumber
        }
      >
        {image ? (
          <Image style={styles.imageCell} source={{ uri: image }} />
        ) : (
          <LinearGradient
            colors={gradients[getRandomNumberInRange(0, gradients.length)]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.graphicContainerWithNumber}
          >
            <Typography
              variant="H1"
              text={data.id}
              styleOverride={styles.titleNumber}
            />
          </LinearGradient>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
