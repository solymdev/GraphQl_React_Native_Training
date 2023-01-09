import React from "react"
import Typography from "../../components/Typography/Typography"
import { View } from "react-native"
import { styles } from "./InformationView.styles"

export const InformationView = () => {
  return (
    <View style={styles.container}>
      <Typography variant="H1" text="info" />
    </View>
  )
}
