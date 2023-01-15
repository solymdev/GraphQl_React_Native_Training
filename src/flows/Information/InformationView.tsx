import React from "react"
import Typography from "components/Typography/Typography"
import { View } from "react-native"
import { styles } from "./InformationView.styles"

export const InformationView = () => {
  return (
    <View style={styles.container}>
      <Typography variant="H1" text="API" bold />
      <Typography
        variant="H3"
        text="https://studio.apollographql.com/public/rick-and-morty-a3b90u/explorer?variant=current"
      />
    </View>
  )
}
