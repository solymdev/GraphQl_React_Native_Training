import React from "react"
import { Text } from "react-native"
import { variants } from "./Typography.styles"

type TypographyProps = {
  text: string
  variant: string
  bold?: boolean
  color?: string
}

export const Typography = ({
  text,
  variant,
  bold,
  color = "black",
}: TypographyProps) => {
  return (
    <Text
      style={[
        variants[variant],
        { fontWeight: bold ? "500" : "normal", color },
      ]}
    >
      {text}
    </Text>
  )
}

export default Typography
