import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { CharacterQuery } from "models/CharactersQuery"
import { styles } from "./Cell.styles"

type CellProps = {
  data: CharacterQuery
  navigateToInfo: (data) => void
}

export const Cell = ({ data, navigateToInfo }: CellProps) => {
  const { name, image, species } = data
  return (
    <TouchableOpacity onPress={() => navigateToInfo(data)}>
      <View style={styles.item}>
        <Image style={styles.imageCell} source={{ uri: image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{species}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
