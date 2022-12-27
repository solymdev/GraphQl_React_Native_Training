import ContentLoader from "react-native-content-loader"
import { Rect } from "react-native-svg"
import { Dimensions } from "react-native"
import { Size } from "utils/size"

export const AnimationLoader = () => {
  const viewWidth = Dimensions.get("window").width
  return (
    <ContentLoader height={500} width={viewWidth} duration={1000}>
      {/* line  */}
      <Rect
        x={Size(5 / 2)}
        y="2"
        rx="5"
        ry="5"
        width={Size(24)}
        height={Size(7 / 2)}
      />
      {/* cell  */}
      <Rect
        x={Size(5 / 2)}
        y={Size(5)}
        rx="5"
        ry="5"
        width={Size(16)}
        height={Size(19)}
      />
      {/* cell  */}
      <Rect
        x={Size(20)}
        y={Size(5)}
        rx="5"
        ry="5"
        width={Size(16)}
        height={Size(19)}
      />
      {/* cell  */}
      <Rect
        x="300"
        y={Size(5)}
        rx="5"
        ry="5"
        width={Size(14)}
        height={Size(19)}
      />
      {/* line */}
      <Rect
        x={Size(5 / 2)}
        y={Size(27)}
        rx="5"
        ry="5"
        width={Size(24)}
        height={Size(7 / 2)}
      />
      {/* cell  */}
      <Rect
        x={Size(5 / 2)}
        y={Size(32)}
        rx="5"
        ry="5"
        width={Size(16)}
        height={Size(19)}
      />
      {/* cell  */}
      <Rect
        x={Size(20)}
        y={Size(32)}
        rx="5"
        ry="5"
        width={Size(16)}
        height={Size(19)}
      />
      {/* cell  */}
      <Rect
        x="300"
        y={Size(32)}
        rx="5"
        ry="5"
        width={Size(14)}
        height={Size(19)}
      />
    </ContentLoader>
  )
}
