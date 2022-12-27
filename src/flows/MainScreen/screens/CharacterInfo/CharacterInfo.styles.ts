import { StyleSheet } from "react-native"
import { Size } from "utils/size"

export const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderRadius: Size(1),
    marginVertical: Size(1),
    width: Size(16),
    marginRight: Size(2),
  },
  flatListContainer: {
    height: Size(27),
    flexGrow: 0,
  },
  container: {
    backgroundColor: "white",
  },
  noMoreTitle: {
    position: "absolute",
    bottom: Size(1),
    left: Size(4),
  },
  paddingTitle: {
    marginBottom: Size(1),
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: Size(1),
  },
  titleName: {
    marginRight: Size(1),
  },
  title: {
    fontSize: Size(2),
    fontWeight: "500",
  },
  subtitle: {
    fontSize: Size(1.7),
  },
  infoContainer: {
    padding: Size(1),
  },
  scrollableCard: {
    backgroundColor: "white",
    borderTopLeftRadius: Size(3),
    borderTopRightRadius: Size(3),
    marginTop: -Size(4),
    height: Size(40),
    padding: Size(3),
  },
})
