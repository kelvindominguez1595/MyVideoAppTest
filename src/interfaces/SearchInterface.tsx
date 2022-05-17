// Generated by https://quicktype.io

export interface SearchMovies {
    page:          number;
    results:       SearchResult[];
    total_results: number;
    total_pages:   number;
}

export interface SearchResult {
    poster_path:       null | string;
    adult:             boolean;
    overview:          string;
    release_date:      string;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    original_language: OriginalLanguage;
    title:             string;
    backdrop_path:     null | string;
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    vote_average:      number;
}

export enum OriginalLanguage {
    En = "en",
    It = "it",
    Zh = "zh",
}
