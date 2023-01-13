import React from "react"
import { render, screen } from "@testing-library/react-native"
import { MockedProvider } from "@apollo/react-testing"
import {
  CHARACTER_INFO,
  CHARACTER_INFO_VARIABLES,
} from "test/mocks/CharacterInfoMock"
import { CharacterInfo } from "./CharacterInfo"

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

const mocks = [CHARACTER_INFO]
const route = { params: CHARACTER_INFO_VARIABLES }

describe("Titles test", () => {
  it("display episode title", async () => {
    const navigation = jest.fn()
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {<CharacterInfo navigation={navigation} route={route} />}
      </MockedProvider>
    )
    expect(await screen.findByText("Rick Sanchez"))
  })
})
