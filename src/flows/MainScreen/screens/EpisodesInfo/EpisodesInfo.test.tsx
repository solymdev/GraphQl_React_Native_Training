import React from "react"
import { render, screen } from "@testing-library/react-native"
import { MockedProvider } from "@apollo/react-testing"
import { EPISODE_INFO } from "test/mocks/EpisodeInfoMock"
import { EpisodesInfo } from "./EpisodesInfo"

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

const mocks = [EPISODE_INFO]
const route = { params: { episode: "Lawnmower Dog", name: "S01E02" } }

describe("first test", () => {
  it("display characters & episodes titles", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {<EpisodesInfo navigation={() => {}} route={route} />}
      </MockedProvider>
    )
    expect(await screen.findByText("a"))
  })
})
