import React from "react"
import { Text, TextStyle, ViewStyle } from "react-native"
import { variants } from "./Typography.styles"

type TextVariants = {
  H1: "H1"
  H2: "H2"
  H3: "H3"
  paragraph: "paragraph"
}

type TypographyProps = {
  text: string
  variant: keyof TextVariants
  styleOverride?: ViewStyle | TextStyle
  bold?: boolean
  color?: string
}

export const Typography = ({
  text,
  variant,
  bold,
  color = "black",
  styleOverride,
}: TypographyProps) => {
  return (
    <Text
      style={[
        variants[variant],
        { fontWeight: bold ? "500" : "normal", color },
        { ...styleOverride },
      ]}
    >
      {text}
    </Text>
  )
}

export default Typography
