import { StyleSheet } from "react-native"
import { Size } from "utils/size"

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingTop: Size(16),
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: Size(5 / 2),
    marginVertical: Size(1),
    marginHorizontal: Size(2),
  },
  flatListContainer: {
    height: Size(27),
    flexGrow: 0,
  },
  title: {
    paddingHorizontal: Size(5 / 2),
    fontSize: Size(3),
    display: "flex",
    marginRight: "auto",
    marginBottom: Size(1),
  },
})
