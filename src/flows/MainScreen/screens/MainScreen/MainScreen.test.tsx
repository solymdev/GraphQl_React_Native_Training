import React from "react"
import { MainScreen } from "./MainScreen"
import { render, screen } from "@testing-library/react-native"
import {
  CharactersGeneralInfoDocument,
  EpisodesGeneralInfoDocument,
} from "../../../../generated/graphql"
import { MockedProvider } from "@apollo/react-testing"
import { debug } from "console"

const mocks = [
  {
    request: {
      query: CharactersGeneralInfoDocument,
    },
    result: {
      data: {
        characters: {
          __typename: "Characters",
          prev: {},
          info: {
            __typename: "Info",
            count: 826,
            next: 2,
            pages: 42,
            prev: null,
          },
          results: [
            [
              {
                __typename: "Character",
                id: "1",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                name: "Rick Sanchez",
                species: "Human",
              },
            ],
          ],
        },
      },
    },
  },
  {
    request: {
      query: EpisodesGeneralInfoDocument,
    },
    result: {
      data: {
        episodes: {
          __typename: "Episodes",
          prev: {},
          info: {
            __typename: "Info",
            count: 51,
            next: 2,
            pages: 3,
            prev: null,
          },
          results: [
            [
              {
                __typename: "Episode",
                episode: "S01E01",
                id: "1",
                name: "Pilot",
              },
            ],
          ],
        },
      },
    },
  },
]

describe("First test", () => {
  it("first test", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {<MainScreen navigation={() => {}} />}
      </MockedProvider>
    )
    expect(await screen.findByText("Characters"))
    expect(await screen.findByText("Episodes"))
  })
})
