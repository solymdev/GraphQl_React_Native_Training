import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { CharacterQueryGeneral } from "models/CharactersQuery"
import { styles } from "./Cell.styles"
import { EpisodesQueryGeneral } from "models/episodesQuery"
import { getRandomNumberInRange } from "../../../../../utils/random"
import Typography from "../../../../../components/Typography/Typography"

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
  const gradients = ["#B0FBEA", "#FFD0AA", "#C1CFFF", "#F0D6FF"]

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
          <View
            style={[
              styles.graphicContainerWithNumber,
              {
                backgroundColor:
                  gradients[getRandomNumberInRange(0, gradients.length)],
              },
            ]}
          >
            <Typography
              variant="H1"
              text={data.id}
              styleOverride={styles.titleNumber}
            />
          </View>
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
