import { gql } from '@apollo/client'

export const QUERY_ALL_FILMS = gql` 
query AllFilms {
    films(order: [releaseDate_ASC]) {
      results{
        releaseDate
        episodeId
        title
           characters {
          count
          results {
            name
            homeworld {
              name
            }
            species {
              results {
                name
              }
            }
            vehicles {
              results {
                name
                model
              }
            }
            starships {
              results {
                name
                model
              }
            }
          }
        }
      }
    }
  }`