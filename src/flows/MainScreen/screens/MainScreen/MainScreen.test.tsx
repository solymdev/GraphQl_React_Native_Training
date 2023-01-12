import React from "react"
import { MainScreen } from "./MainScreen"
import { render, screen } from "@testing-library/react-native"
import { MockedProvider } from "@apollo/react-testing"
import { CHARACTERS_GENERAL_INFO } from "test/mocks/CharactersGeneralInfoMock"
import { EPISODES_GENERAL_INFO } from "test/mocks/EpisodesGeneralInfoMock"

const mocks = [CHARACTERS_GENERAL_INFO, EPISODES_GENERAL_INFO]

describe("Displays main titles", () => {
  it("display characters & episodes titles", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {<MainScreen navigation={() => {}} />}
      </MockedProvider>
    )
    expect(await screen.findByText("Characters"))
    expect(await screen.findByText("Episodes"))
  })

  it("shows first character title", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {<MainScreen navigation={() => {}} />}
      </MockedProvider>
    )
    expect(await screen.findByText("Rick Sanchez"))
  })

  it("shows first episode title", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {<MainScreen navigation={() => {}} />}
      </MockedProvider>
    )
    expect(await screen.findByText("Pilot"))
  })
})
