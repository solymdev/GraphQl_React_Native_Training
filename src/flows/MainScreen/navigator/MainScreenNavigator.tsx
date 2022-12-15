import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MainScreen } from "../screens/MainScreen/MainScreen"
import CharacterInfo from "../screens/CharacterInfo"

const Stack = createNativeStackNavigator()

export const MainScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={MainScreen} />
      <Stack.Screen name="Second" component={CharacterInfo} />
    </Stack.Navigator>
  )
}
