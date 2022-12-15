import { gql } from "@apollo/client"

export const QUERY_ALL_CHARACTERS = gql`
  query AllCharacters {
    characters {
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
