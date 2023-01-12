import { AllEpisodesDocument } from "generated/graphql"

export const EPISODE_INFO = {
  request: {
    query: AllEpisodesDocument,
    variables: {
      filter: {
        episode: "Lawnmower Dog",
        name: "S01E02",
      },
    },
  },
  result: {
    data: {
      episodes: {
        __typename: "Episodes",
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
            __typename: "Episode",
            air_date: "December 9, 2013",
            characters: [
              {
                __typename: "Character",
                created: "2017-11-04T18:48:46.250Z",
                gender: "Male",
                id: "1",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                name: "Rick Sanchez",
                species: "Human",
                status: "Alive",
                type: "",
              },
              {
                __typename: "Character",
                created: "2017-11-04T18:50:21.651Z",
                gender: "Male",
                id: "2",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                name: "Morty Smith",
                species: "Human",
                status: "Alive",
                type: "",
              },
              {
                __typename: "Character",
                created: "2017-11-05T09:48:44.230Z",
                gender: "Female",
                id: "38",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                name: "Beth Smith",
                species: "Human",
                status: "Alive",
                type: "",
              },
              {
                __typename: "Character",
                created: "2017-11-05T10:24:38.089Z",
                gender: "Male",
                id: "46",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/46.jpeg",
                name: "Bill",
                species: "Animal",
                status: "unknown",
                type: "Dog",
              },
              {
                __typename: "Character",
                created: "2017-11-05T12:22:17.848Z",
                gender: "Male",
                id: "63",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
                name: "Centaur",
                species: "Mythological Creature",
                status: "Alive",
                type: "Centaur",
              },
              {
                __typename: "Character",
                created: "2017-11-30T14:20:35.772Z",
                gender: "Female",
                id: "80",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
                name: "Creepy Little Girl",
                species: "Human",
                status: "Alive",
                type: "",
              },
            ],
            created: "2017-11-10T12:56:33.916Z",
            episode: "S01E02",
            id: "2",
            name: "Lawnmower Dog",
          },
        ],
      },
    },
  },
}
