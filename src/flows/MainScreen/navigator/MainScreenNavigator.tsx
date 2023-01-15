import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MainScreen } from "../screens/MainScreen/MainScreen"
import EpisodesInfo from "../screens/EpisodesInfo"
import CharacterInfo from "../screens/CharacterInfo"

const Stack = createNativeStackNavigator()

export enum MainScreenNavigatorScreens {
  MAIN = "Rick & Morty",
  CHARACTER = "Character",
  EPISODE = "Episode",
}

export const MainScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MainScreenNavigatorScreens.MAIN}>
      <Stack.Screen
        name={MainScreenNavigatorScreens.MAIN}
        component={MainScreen}
        options={{ headerLargeTitle: true }}
      />
      <Stack.Screen
        name={MainScreenNavigatorScreens.CHARACTER}
        component={CharacterInfo}
      />
      <Stack.Screen
        name={MainScreenNavigatorScreens.EPISODE}
        component={EpisodesInfo}
      />
    </Stack.Navigator>
  )
}
