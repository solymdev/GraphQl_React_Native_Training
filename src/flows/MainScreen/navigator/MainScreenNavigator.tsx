import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MainScreen } from "../screens/MainScreen/MainScreen"
import EpisodesInfo from "../screens/EpisodesInfo"
import CharacterInfo from "../screens/CharacterInfo"

const Stack = createNativeStackNavigator()

export const MainScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rick & Morty"
        component={MainScreen}
        options={{
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen name="Character" component={CharacterInfo} />
      <Stack.Screen name="Episode" component={EpisodesInfo} />
    </Stack.Navigator>
  )
}
