import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { CharacterQuery } from "models/CharactersQuery"
import { styles } from "./Cell.styles"
import { EpisodesQuery } from "models/episodesQuery"

type CellProps = {
  data: CharacterQuery | EpisodesQuery
  title: string
  subtitle: string
  image: string
  navigateToInfo: (data) => void
}

export const Cell = ({
  data,
  title,
  subtitle,
  image,
  navigateToInfo,
}: CellProps) => {
  return (
    <TouchableOpacity onPress={() => navigateToInfo(data)}>
      <View style={styles.item}>
        <Image style={styles.imageCell} source={{ uri: image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
