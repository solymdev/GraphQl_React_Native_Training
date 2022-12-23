import React, { useEffect, useState } from "react"
import { useAllCharactersQuery } from "generated/graphql"
import { debounce } from "lodash"
import Typography from "components/Typography/Typography"
import { ScrollView } from "react-native-gesture-handler"

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

  if (error) return <Typography variant="paragraph" text={"Error"} />

  if (loading) return <Typography variant="paragraph" text={"Loading"} />

  return (
    <ScrollView style={{ paddingTop: 80 }}>
      {data &&
        data.characters.results.map((d) => (
          <Typography key={d.id} variant="paragraph" text={d.name} />
        ))}
    </ScrollView>
  )
}
