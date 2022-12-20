import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ShoppingCart } from "./screens/ShoppingCart"

const Stack = createNativeStackNavigator()

export const MainScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rick & Morty"
        component={ShoppingCart}
        options={{
          headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  )
}
