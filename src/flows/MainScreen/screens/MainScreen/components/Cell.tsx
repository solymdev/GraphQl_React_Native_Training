import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { CharacterQuery } from "models/CharactersQuery"
import { styles } from "./Cell.styles"
import { EpisodesQuery } from "models/episodesQuery"
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
        <View style={styles.graphicContainer}>
          {withNumber ? (
            <Typography variant="H1" text={data.id} />
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
