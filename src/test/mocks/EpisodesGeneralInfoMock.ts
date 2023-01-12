import { EpisodesGeneralInfoDocument } from "generated/graphql"

export const EPISODES_GENERAL_INFO = {
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
          {
            __typename: "Episode",
            episode: "S01E01",
            id: "1",
            name: "Pilot",
          },
        ],
      },
    },
  },
}
