import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type CharactersGeneralInfoQueryVariables = Exact<{
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type CharactersGeneralInfoQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', count?: number | null, next?: number | null, pages?: number | null, prev?: number | null } | null, results?: Array<{ __typename?: 'Character', id?: string | null, image?: string | null, name?: string | null, species?: string | null } | null> | null } | null };

export type AllCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterCharacter>;
}>;


export type AllCharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', created?: string | null, gender?: string | null, id?: string | null, image?: string | null, name?: string | null, species?: string | null, status?: string | null, type?: string | null, origin?: { __typename?: 'Location', created?: string | null, dimension?: string | null, id?: string | null, name?: string | null, type?: string | null } | null, episode: Array<{ __typename?: 'Episode', air_date?: string | null, created?: string | null, episode?: string | null, id?: string | null, name?: string | null } | null> } | null> | null, info?: { __typename?: 'Info', count?: number | null, pages?: number | null, next?: number | null, prev?: number | null } | null } | null };

export type AllEpisodesQueryVariables = Exact<{
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type AllEpisodesQuery = { __typename?: 'Query', episodes?: { __typename?: 'Episodes', info?: { __typename?: 'Info', count?: number | null, next?: number | null, pages?: number | null, prev?: number | null } | null, results?: Array<{ __typename?: 'Episode', air_date?: string | null, created?: string | null, episode?: string | null, id?: string | null, name?: string | null, characters: Array<{ __typename?: 'Character', created?: string | null, gender?: string | null, id?: string | null, image?: string | null, name?: string | null, species?: string | null, status?: string | null, type?: string | null } | null> } | null> | null } | null };


export const CharactersGeneralInfoDocument = gql`
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
    `;

/**
 * __useCharactersGeneralInfoQuery__
 *
 * To run a query within a React component, call `useCharactersGeneralInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersGeneralInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersGeneralInfoQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useCharactersGeneralInfoQuery(baseOptions?: Apollo.QueryHookOptions<CharactersGeneralInfoQuery, CharactersGeneralInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharactersGeneralInfoQuery, CharactersGeneralInfoQueryVariables>(CharactersGeneralInfoDocument, options);
      }
export function useCharactersGeneralInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharactersGeneralInfoQuery, CharactersGeneralInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharactersGeneralInfoQuery, CharactersGeneralInfoQueryVariables>(CharactersGeneralInfoDocument, options);
        }
export type CharactersGeneralInfoQueryHookResult = ReturnType<typeof useCharactersGeneralInfoQuery>;
export type CharactersGeneralInfoLazyQueryHookResult = ReturnType<typeof useCharactersGeneralInfoLazyQuery>;
export type CharactersGeneralInfoQueryResult = Apollo.QueryResult<CharactersGeneralInfoQuery, CharactersGeneralInfoQueryVariables>;
export const AllCharactersDocument = gql`
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
    `;

/**
 * __useAllCharactersQuery__
 *
 * To run a query within a React component, call `useAllCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useAllCharactersQuery(baseOptions?: Apollo.QueryHookOptions<AllCharactersQuery, AllCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCharactersQuery, AllCharactersQueryVariables>(AllCharactersDocument, options);
      }
export function useAllCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCharactersQuery, AllCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCharactersQuery, AllCharactersQueryVariables>(AllCharactersDocument, options);
        }
export type AllCharactersQueryHookResult = ReturnType<typeof useAllCharactersQuery>;
export type AllCharactersLazyQueryHookResult = ReturnType<typeof useAllCharactersLazyQuery>;
export type AllCharactersQueryResult = Apollo.QueryResult<AllCharactersQuery, AllCharactersQueryVariables>;
export const AllEpisodesDocument = gql`
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
    `;

/**
 * __useAllEpisodesQuery__
 *
 * To run a query within a React component, call `useAllEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEpisodesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAllEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<AllEpisodesQuery, AllEpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllEpisodesQuery, AllEpisodesQueryVariables>(AllEpisodesDocument, options);
      }
export function useAllEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllEpisodesQuery, AllEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllEpisodesQuery, AllEpisodesQueryVariables>(AllEpisodesDocument, options);
        }
export type AllEpisodesQueryHookResult = ReturnType<typeof useAllEpisodesQuery>;
export type AllEpisodesLazyQueryHookResult = ReturnType<typeof useAllEpisodesLazyQuery>;
export type AllEpisodesQueryResult = Apollo.QueryResult<AllEpisodesQuery, AllEpisodesQueryVariables>;