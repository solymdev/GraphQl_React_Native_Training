import { CharactersGeneralInfoDocument } from "generated/graphql"

export const CHARACTERS_GENERAL_INFO = {
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
          {
            __typename: "Character",
            id: "1",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name: "Rick Sanchez",
            species: "Human",
          },
        ],
      },
    },
  },
}
