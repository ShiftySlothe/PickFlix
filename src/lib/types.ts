import React from 'react';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';

// Refetch context
type Refetch = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
) => Promise<QueryObserverResult>;

export interface RefetchContext {
  refetch: Refetch;
}

export type OnClose = () => void;

export enum TMDBBackDropSize {
  w300 = 'w300',
  w780 = 'w780',
  w1280 = 'w1280',
  original = 'original',
}

export enum TMDBLogoSize {
  w45 = 'w45',
  w92 = 'w92',
  w154 = 'w154',
  w185 = 'w185',
  w300 = 'w300',
  w500 = 'w500',
  original = 'original',
}

export enum TMDBPosterSize {
  w92 = 'w92',
  w154 = 'w154',
  w185 = 'w185',
  w300 = 'w300',
  w500 = 'w500',
  w780 = 'w780',
  original = 'original',
}

export enum TMDBStillSize {
  w92 = 'w92',
  w185 = 'w185',
  w300 = 'w300',
  original = 'original',
}

export enum TMDBStatus {
  Rumored = 'Rumored',
  Planned = 'Planned',
  InProduction = 'InProduction',
  PostProduction = 'PostProduction',
  Released = 'Released',
  Canceled = 'Canceled',
}

export type TMDBGenre = {
  id: number;
  name: string;
};

export type TMDBCountry = {
  iso_3166_1?: string;
  name?: string;
};

export type TMDBLanguage = {
  iso_639_1?: string;
  name?: string;
};

export type TMDBCompany = {
  description?: string;
  headquaters?: string;
  homepage?: string;
  id?: number;
  logo_path?: string | null;
  name?: string;
  origin_country?: string;
  parent_company?: null | TMDBCompany;
};

export type TMDBPerson = {
  birthday?: string | null;
  department?: string;
  known_for_department?: string;
  job?: string;
  deathday?: null | string;
  id?: number;
  name?: string;
  also_known_as?: string[];
  gender?: number;
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  profile_path?: string | null;
  adult?: boolean;
  imdb_id?: string;
  homepage?: null | string;
  credit_id?: string;
  character?: string;
  order?: number;
};

export type TMDBCredit = {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  credit_id?: string | null;
};

export type TMDBCreditCrew = TMDBCredit & {
  character?: string;
  order?: string;
};

export type TMDBCreditCast = TMDBCredit & {
  department?: string;
  job?: string;
};

export type TMDBMovie = {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | Record<string, unknown>;
  budget?: number;
  genres?: TMDBGenre;
  homepage?: string | null;
  id: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: string | null;
  poster_path?: string | null;
  production_companies?: TMDBCompany;
  production_countries?: TMDBCountry;
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: TMDBLanguage;
  status?: TMDBStatus;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type TMDBTVShow = {
  backdrop_path?: string | null;
  created_by?: TMDBPerson[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres?: TMDBGenre[];
  homepage?: string;
  id: number;
  in_production?: boolean;
  languages?: TMDBLanguage[];
  last_air_date?: string;
  last_episode_to_air?: TMDBTVEpisode;
  name?: string;
  next_episode_to_air?: null;
  networks?: TMDBCompany;
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: TMDBCompany;
  production_countries?: TMDBCountry;
  seasons?: TMDBTVSeason;
  spoken_languages?: TMDBLanguage;
  status?: string;
  tagline?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
};

export type TMDBTVSeason = {
  _id: string;
  air_date: string;
  episodes: TMDBTVEpisode[];
  name?: string;
  overview?: string;
  id?: number;
  poster_path?: string | null;
  season_number?: number;
};

export type TMDBTVEpisode = {
  air_date?: string;
  crew?: TMDBPerson[];
  guest_stars?: TMDBPerson[];
  name?: string;
  overview?: string;
  id?: number;
  production_code?: string | null;
  season_number?: number;
  still_path?: string | null;
  vote_average?: number;
  vote_count?: number;
};

export type TMDBVideo = {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
  id?: string;
};

export type TMDBResponse = {
  page?: number;
  results?: any;
  total_pages?: number;
  total_results?: number;
};

export interface TMDBMovieResponse extends TMDBResponse {
  results?: TMDBMovie[];
}

export interface TMDBTVShowResponse extends TMDBResponse {
  results?: TMDBTVShow[];
}

export interface TMDBTVEpisodeResponse extends TMDBResponse {
  results?: TMDBTVEpisode[];
}

export interface TMDBTVSeasonResponse extends TMDBResponse {
  results?: TMDBTVSeason[];
}

export interface TMDBCreditsResponse {
  id?: number;
  cast?: TMDBCreditCast;
  crew?: TMDBCreditCrew;
}

export interface TMDBVideoResponse {
  id?: number;
  results?: TMDBVideo[];
}
