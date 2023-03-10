import { gql } from "@apollo/client"

export const QUERY_EPISODES_GENERAL_INDO = gql`
  query EpisodesGeneralInfo($filter: FilterEpisode, $page: Int) {
    episodes(filter: $filter, page: $page) {
      info {
        count
        next
        pages
        prev
      }
      results {
        episode
        id
        name
      }
    }
  }
`

export const QUERY_CHARACTERS_GENERAL_INFO = gql`
  query CharactersGeneralInfo($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      info {
        count
        next
        pages
        prev
      }
      results {
        id
        image
        name
        species
      }
    }
  }
`

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
        episode {
          air_date
          created
          episode
          id
          name
        }
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
  query AllEpisodes($filter: FilterEpisode, $page: Int) {
    episodes(filter: $filter, page: $page) {
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
