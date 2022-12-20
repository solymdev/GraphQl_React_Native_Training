import React from "react"
import { Text } from "react-native"
import { variants } from "./Typography.styles"

type TypographyProps = {
  text: string
  variant: string
  bold?: boolean
}

export const Typography = ({ text, variant, bold }: TypographyProps) => {
  return (
    <Text style={[variants[variant], { fontWeight: bold ? "500" : "normal" }]}>
      {text}
    </Text>
  )
}

export default Typography
