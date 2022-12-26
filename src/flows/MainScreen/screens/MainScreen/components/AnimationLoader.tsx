import ContentLoader from "react-native-content-loader"
import { Rect } from "react-native-svg"
import { Size } from "utils/size"

export const AnimationLoader = () => {
  return (
    <ContentLoader height={500} width={"100%"} duration={1000}>
      <Rect x={Size(5 / 2)} y="2" rx="5" ry="5" width="194" height="28" />
      <Rect
        x={Size(5 / 2)}
        y={Size(5)}
        rx="5"
        ry="5"
        width={Size(16)}
        height={Size(19)}
      />
      <Rect
        x={Size(20)}
        y={Size(5)}
        rx="5"
        ry="5"
        width={Size(16)}
        height={Size(19)}
      />
      <Rect
        x="300"
        y={Size(5)}
        rx="5"
        ry="5"
        width={Size(14)}
        height={Size(19)}
      />
      <Rect
        x={Size(5 / 2)}
        y={Size(27)}
        rx="5"
        ry="5"
        width="194"
        height="28"
      />
      <Rect
        x={Size(5 / 2)}
        y={Size(32)}
        rx="5"
        ry="5"
        width={Size(16)}
        height={Size(19)}
      />
      <Rect
        x={Size(20)}
        y={Size(32)}
        rx="5"
        ry="5"
        width={Size(16)}
        height={Size(19)}
      />
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
