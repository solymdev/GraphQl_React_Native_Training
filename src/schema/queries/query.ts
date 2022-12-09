import { gql } from "@apollo/client"

export const QUERY_ALL_FILMS = gql`
  query AllFilms {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`
