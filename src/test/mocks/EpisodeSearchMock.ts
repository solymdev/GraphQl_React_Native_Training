import { AllEpisodesDocument } from "generated/graphql"

export const EPISODE_SEARCH_VARIABLES = {
  name: "Rick",
}

export const EPISODE_SEARCH = {
  request: {
    query: AllEpisodesDocument,
    variables: { filter: EPISODE_SEARCH_VARIABLES },
    skip: false,
  },
  result: {
    data: {
      episodes: {
        __typename: "Episodes",
        info: { __typename: "Info", count: 28, next: 2, pages: 2, prev: null },
        results: [
          {
            __typename: "Episode",
            air_date: "January 27, 2014",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:34.339Z",
            episode: "S01E06",
            id: "6",
            name: "Rick Potion #9",
          },
          {
            __typename: "Episode",
            air_date: "March 24, 2014",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:34.645Z",
            episode: "S01E09",
            id: "9",
            name: "Something Ricked This Way Comes",
          },
          {
            __typename: "Episode",
            air_date: "April 7, 2014",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:34.747Z",
            episode: "S01E10",
            id: "10",
            name: "Close Rick-counters of the Rick Kind",
          },
          {
            __typename: "Episode",
            air_date: "April 14, 2014",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:34.850Z",
            episode: "S01E11",
            id: "11",
            name: "Ricksy Business",
          },
          {
            __typename: "Episode",
            air_date: "July 26, 2015",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:34.953Z",
            episode: "S02E01",
            id: "12",
            name: "A Rickle in Time",
          },
          {
            __typename: "Episode",
            air_date: "August 16, 2015",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:35.261Z",
            episode: "S02E04",
            id: "15",
            name: "Total Rickall",
          },
          {
            __typename: "Episode",
            air_date: "August 30, 2015",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:35.467Z",
            episode: "S02E06",
            id: "17",
            name: "The Ricks Must Be Crazy",
          },
          {
            __typename: "Episode",
            air_date: "April 1, 2017",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:35.983Z",
            episode: "S03E01",
            id: "22",
            name: "The Rickshank Rickdemption",
          },
          {
            __typename: "Episode",
            air_date: "July 30, 2017",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:36.100Z",
            episode: "S03E02",
            id: "23",
            name: "Rickmancing the Stone",
          },
          {
            __typename: "Episode",
            air_date: "August 6, 2017",
            characters: [[Object], [Object], [Object]],
            created: "2017-11-10T12:56:36.206Z",
            episode: "S03E03",
            id: "24",
            name: "Pickle Rick",
          },
        ],
      },
    },
  },
}
