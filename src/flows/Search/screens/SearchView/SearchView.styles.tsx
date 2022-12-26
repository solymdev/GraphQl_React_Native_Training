import { StyleSheet } from "react-native"
import { Size } from "../../../../utils/size"
import { SHADOW_LEVEL1 } from "../../../../utils/shadows"

export const styles = StyleSheet.create({
  searchViewContainer: {
    paddingTop: Size(11),
    paddingHorizontal: Size(2),
  },
  charactersTitle: {
    marginBottom: Size(2),
  },
  itemCell: {
    padding: Size(2),
    backgroundColor: "white",
    marginBottom: Size(1),
    borderRadius: Size(1),
    ...SHADOW_LEVEL1,
  },
  charactersList: {
    marginBottom: Size(2),
  },
  episodesList: {
    marginBottom: Size(14),
  },
})
