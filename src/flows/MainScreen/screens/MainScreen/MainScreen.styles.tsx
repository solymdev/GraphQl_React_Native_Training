import { StyleSheet } from "react-native"
import { Size } from "utils/size"

export const styles = StyleSheet.create({
  scrollView: {
    paddingTop: Size(16),
    backgroundColor: "white",
  },
  loadingContainer: {
    paddingTop: Size(17),
  },
  errorContainer: {
    paddingTop: Size(27),
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: Size(5 / 2),
    marginVertical: Size(1),
    marginHorizontal: Size(2),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: Size(1),
  },
  flatListContainer: {
    height: Size(27),
    flexGrow: 0,
  },
  title: {
    paddingLeft: Size(5 / 2),
    fontSize: Size(3),
    marginRight: Size(1),
  },
  cellContainer: { height: 216 },
})
