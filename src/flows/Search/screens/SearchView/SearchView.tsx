import React, { useEffect, useState } from "react"
import { useAllCharactersQuery } from "generated/graphql"
import { debounce } from "lodash"
import Typography from "components/Typography/Typography"
import { CharacterQuery } from "models/CharactersQuery"
import { FlatList } from "react-native-gesture-handler"
import { TouchableOpacity, View } from "react-native"

export const SearchView = ({ navigation }) => {
  const [searchText, setSearchText] = useState("")
  const [isSkipEnabled, setSkip] = useState(true)
  const { data, loading, error } = useAllCharactersQuery({
    variables: {
      filter: { name: searchText },
    },
    skip: isSkipEnabled,
  })

  const changeTextDebouncer = debounce(() => searchFilterFunction, 500)

  const searchFilterFunction = (event) => {
    setSearchText(event.nativeEvent.text)
  }

  useEffect(() => {
    changeTextDebouncer()
  }, [searchText])

  const handleTextChange = (event) => {
    const { text } = event.nativeEvent
    if (text.length > 0) {
      setSkip(false)
      setSearchText(event.nativeEvent.text)
    } else {
      setSkip(true)
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeHolder: "Search",
        onChangeText: (event) => handleTextChange(event),
      },
    })
  }, [navigation])

  console.log(data)

  const navigateToCharacterInfo = (data: CharacterQuery) => {
    navigation.navigate("Character", data)
  }

  if (error) return <Typography variant="paragraph" text={"Error"} />

  if (loading) return <Typography variant="paragraph" text={"Loading"} />

  if (!data) return <></>

  return (
    <View style={{ paddingTop: 80 }}>
      <Typography text="Characters" variant="H3" bold />
      <FlatList
        data={data.characters.results.slice(0, 4)}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{ padding: 16 }}
              onPress={() => navigateToCharacterInfo(item)}
            >
              <Typography variant="paragraph" text={item.name} />
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  )
}
