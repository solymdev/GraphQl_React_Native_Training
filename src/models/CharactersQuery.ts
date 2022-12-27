export type CharacterQuery = {
  __typename?: "Character"
  created?: string
  gender?: string
  id?: string
  image?: string
  name?: string
  species?: string
  status?: string
  type?: string
  origin?: {
    __typename?: "Location"
    created?: string
    dimension?: string
    id?: string
    name?: string
    type?: string
  }
}

export type CharacterQueryGeneral = {
  __typename?: "Character"
  id?: string
  image?: string
  name?: string
  species?: string
}
