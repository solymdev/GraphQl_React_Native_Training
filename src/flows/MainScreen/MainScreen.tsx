import React from "react"
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native"
import { useAllFilmsQuery, AllFilmsQuery } from "../../generated/graphql"
import { styles } from "./MainScreen.styles"

export const MainScreen = () => {
  const { data, error, loading } = useAllFilmsQuery()

  if (data) {
    console.log("DATA:", data)
  }

  const renderItem = ({ item }) => <Item title={item.title} />

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList data={data.allFilms.films} renderItem={renderItem}></FlatList>
      </SafeAreaView>
    </View>
  )
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)
