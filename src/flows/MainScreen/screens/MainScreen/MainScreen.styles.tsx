import { StyleSheet } from "react-native"
import { Size } from "utils/size"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Size(5 / 2),
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: Size(5 / 2),
    marginVertical: Size(1),
    marginHorizontal: Size(2),
  },
  flatListContainer: {
    height: Size(24),
    flexGrow: 0,
  },
  title: {
    fontSize: Size(3.5),
    display: "flex",
    marginRight: "auto",
  },
})
