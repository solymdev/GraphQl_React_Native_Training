import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SearchView from "./screens/SearchView"

const Stack = createNativeStackNavigator()

export const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search View"
        component={SearchView}
        options={{
          headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  )
}
