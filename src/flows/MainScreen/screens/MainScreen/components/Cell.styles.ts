import { StyleSheet } from "react-native"
import { Size } from "utils/size"
import { SHADOW_LEVEL1 } from "utils/shadows"

export const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderRadius: Size(1),
    marginVertical: Size(1),
    width: Size(16),
    marginRight: Size(2),
    ...SHADOW_LEVEL1,
  },
  title: {
    fontSize: Size(2),
    fontWeight: "500",
  },
  subtitle: {
    fontSize: Size(1.7),
    marginBottom: Size(1),
  },
  infoContainer: {
    padding: Size(1),
  },
  imageCell: {
    width: "100%",
    borderTopLeftRadius: Size(1),
    borderTopRightRadius: Size(1),
    height: Size(16),
  },
})
