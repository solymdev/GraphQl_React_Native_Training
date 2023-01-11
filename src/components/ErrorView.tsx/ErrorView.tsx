import React from "react"
import { View } from "react-native"
import { styles } from "./ErrorView.styles"
import Typography from "components/Typography/Typography"

export const ErrorView = () => {
  return (
    <View style={styles.errorContainer}>
      <Typography variant="H3" text="Ups... something went wrong" />
    </View>
  )
}
