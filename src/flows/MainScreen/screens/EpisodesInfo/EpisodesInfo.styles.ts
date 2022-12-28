import { StyleSheet } from "react-native"
import { Size } from "utils/size"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    borderRadius: Size(1),
    marginVertical: Size(1),
    width: Size(16),
    marginRight: Size(2),
  },
  title: {
    fontSize: Size(2),
    fontWeight: "500",
  },
  noMoreTitle: {
    position: "absolute",
    bottom: Size(1),
    left: Size(4),
  },
  countTitle: {
    marginLeft: Size(1),
  },
  paddingTitle: {
    marginBottom: Size(1),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: Size(1),
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
    padding: Size(3),
  },
  charactersTitle: {
    marginTop: Size(2),
    marginBottom: Size(1),
  },
})
