import React from "react"
import { Text } from "react-native"
import { variants } from "./Typography.styles"

type TypographyProps = {
  text: string
  variant: string
}

export const Typography = ({ text, variant }: TypographyProps) => {
  return <Text style={variants[variant]}>{text}</Text>
}

export default Typography
