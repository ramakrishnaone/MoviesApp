export interface Movie {
    ID: number;
    Title: string;
    Year: string;
    Rating: number;
    Franchise: string;
}

export const initMovies: Movie = {
    ID: 0,
    Rating: 0,
    Title: "",
    Year: "",
    Franchise: ""
}