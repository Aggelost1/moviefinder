export class FindReturnedData {
    page: number;
    results: Array<any>;
    total_results: number;
    total_pages: number;
}

export class FindMovieData {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<any>;
    original_language: string;
    original_title: string; 
    overview: string;
    popularity: any;
    release_date: string;
    video: boolean;
    vote_average: any;
    vote_count: number;
    poster_path: string;
    title: string;
}


export class UrlList { 
    first: string;
    second: string;
    
}
