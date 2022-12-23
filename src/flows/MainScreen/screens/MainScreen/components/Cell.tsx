import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { CharacterQuery } from "models/CharactersQuery"
import { styles } from "./Cell.styles"
import { EpisodesQuery } from "models/episodesQuery"
import { LinearGradient } from "expo-linear-gradient"
import Typography from "components/Typography/Typography"

type CellProps = {
  data: CharacterQuery | EpisodesQuery
  title: string
  subtitle: string
  image: string
  navigateToInfo: (data) => void
  withNumber?: boolean
}

export const Cell = ({
  data,
  title,
  subtitle,
  image,
  navigateToInfo,
  withNumber,
}: CellProps) => {
  return (
    <TouchableOpacity onPress={() => navigateToInfo(data)}>
      <View style={styles.item}>
        <View
          style={
            withNumber
              ? styles.graphicContainerWithNumber
              : styles.graphicContainer
          }
        >
          {withNumber ? (
            <LinearGradient
              // Background Linear Gradient
              colors={["#B0FBEA", "#CDFDF2"]}
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
          ) : (
            <Image style={styles.imageCell} source={{ uri: image }} />
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
      </View>
    </TouchableOpacity>
  )
}
