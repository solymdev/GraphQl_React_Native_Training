import ContentLoader from "react-native-content-loader"
import { Rect } from "react-native-svg"
import { Dimensions } from "react-native"
import { Size } from "utils/size"

export const AnimationLoader = () => {
  const viewWidth = Dimensions.get("window").width
  const viewHeight = Dimensions.get("window").height
  return (
    <ContentLoader height={viewHeight} width={viewWidth} duration={1000}>
      {/* cell  */}
      <Rect
        x={Size(5 / 2)}
        y={Size(12)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(7)}
      />
      <Rect
        x={Size(5 / 2)}
        y={Size(21)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(7)}
      />
      <Rect
        x={Size(5 / 2)}
        y={Size(30)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(7)}
      />
      <Rect
        x={Size(5 / 2)}
        y={Size(39)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(7)}
      />
      <Rect
        x={Size(5 / 2)}
        y={Size(48)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(7)}
      />
      <Rect
        x={Size(5 / 2)}
        y={Size(57)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(7)}
      />
      <Rect
        x={Size(5 / 2)}
        y={Size(66)}
        rx="5"
        ry="5"
        width={viewWidth - Size(5)}
        height={Size(7)}
      />
      {/* cell  */}
    </ContentLoader>
  )
}
