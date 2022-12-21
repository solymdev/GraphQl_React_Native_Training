import { gql } from "@apollo/client"

export const QUERY_ALL_CHARACTERS = gql`
  query AllCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        created
        gender
        id
        image
        name
        origin {
          created
          dimension
          id
          name
          type
        }
        species
        status
        type
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`

export const QUERY_ALL_EPISODES = gql`
  query AllEpisodes($filter: FilterEpisode) {
    episodes(filter: $filter) {
      info {
        count
        next
        pages
        prev
      }
      results {
        air_date
        characters {
          created
          gender
          id
          image
          name
          species
          status
          type
        }
        created
        episode
        id
        name
      }
    }
  }
`
