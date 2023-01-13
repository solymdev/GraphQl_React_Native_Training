import React from "react"
import { render, screen } from "@testing-library/react-native"
import { MockedProvider } from "@apollo/react-testing"
import {
  EPISODE_INFO,
  EPISODE_INFO_VARIABLES,
} from "test/mocks/EpisodeInfoMock"
import { EpisodesInfo } from "./EpisodesInfo"

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

const mocks = [EPISODE_INFO]
const route = { params: EPISODE_INFO_VARIABLES }

describe("Titles test", () => {
  it("display episode title", async () => {
    const navigation = jest.fn()
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {<EpisodesInfo navigation={navigation} route={route} />}
      </MockedProvider>
    )
    expect(await screen.findByText("S01E02"))
  })
})
