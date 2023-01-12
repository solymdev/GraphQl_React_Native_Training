import { AllCharactersDocument } from "generated/graphql"

export const CHARACTER_INFO = {
  request: {
    query: AllCharactersDocument,
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
            created: "2017-11-04T18:48:46.250Z",
            episode: [
              {
                __typename: "Episode",
                air_date: "December 2, 2013",
                created: "2017-11-10T12:56:33.798Z",
                episode: "S01E01",
                id: "1",
                name: "Pilot",
              },
              {
                __typename: "Episode",
                air_date: "December 9, 2013",
                created: "2017-11-10T12:56:33.916Z",
                episode: "S01E02",
                id: "2",
                name: "Lawnmower Dog",
              },
              {
                __typename: "Episode",
                air_date: "December 16, 2013",
                created: "2017-11-10T12:56:34.022Z",
                episode: "S01E03",
                id: "3",
                name: "Anatomy Park",
              },
              {
                __typename: "Episode",
                air_date: "January 13, 2014",
                created: "2017-11-10T12:56:34.129Z",
                episode: "S01E04",
                id: "4",
                name: "M. Night Shaym-Aliens!",
              },
            ],
            gender: "Male",
            id: "1",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name: "Rick Sanchez",
            origin: {
              __typename: "Location",
              created: "2017-11-10T12:42:04.162Z",
              dimension: "Dimension C-137",
              id: "1",
              name: "Earth (C-137)",
              type: "Planet",
            },
            species: "Human",
            status: "Alive",
            type: "",
          },
        ],
      },
    },
  },
}
