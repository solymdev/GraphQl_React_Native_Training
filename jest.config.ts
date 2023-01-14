import { defaults as tsjPreset } from "ts-jest/presets"
import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  preset: "react-native",
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|tabler-icons-react-native)/).*/",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  verbose: true,
}

export default jestConfig
