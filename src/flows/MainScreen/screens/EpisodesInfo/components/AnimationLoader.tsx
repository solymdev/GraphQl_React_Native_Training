import ContentLoader from "react-native-content-loader"
import { Rect } from "react-native-svg"
import { Dimensions } from "react-native"
import { Size } from "utils/size"

export const AnimationLoader = () => {
  const viewWidth = Dimensions.get("window").width
  return (
    <ContentLoader height={500} width={viewWidth} duration={1000}>
      {/* cell  */}
      <Rect
        x={Size(5 / 2)}
        y={Size(5)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(21)}
      />
      {/* cell  */}
      <Rect
        x={Size(5 / 2)}
        y={Size(32)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(36)}
      />
    </ContentLoader>
  )
}
