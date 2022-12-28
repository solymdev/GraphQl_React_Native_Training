export type EpisodesQuery = {
  __typename?: "Episode"
  air_date?: string
  created?: string
  episode?: string
  id?: string
  name?: string
  characters: {
    __typename?: "Character"
    created?: string
    gender?: string
    id?: string
    image?: string
    name?: string
    species?: string
    status?: string
    type?: string
  }[]
}

export type EpisodesQueryGeneral = {
  __typename?: "Episode"
  episode?: string
  id?: string
  name?: string
}
