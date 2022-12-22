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
