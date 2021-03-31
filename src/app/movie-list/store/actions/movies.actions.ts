import { Action } from '@ngrx/store';
import { Movie } from '../../../common/model/movie.model';

export enum MoviesActionType {
    LOAD_MOVIES = '[MOVIES] Load Movies',
    LOAD_MOVIES_SUCCESS = '[MOVIES] Load Movies Success',
    LOAD_MOVIES_FAIL = '[MOVIES] Load Movies Fail',
    ADD_MOVIE = '[MOVIES] Add Movie',
    ADD_MOVIE_SUCCESS = '[MOVIES] Add Movie Success',
    ADD_MOVIE_FAIL = '[MOVIES] Add Movie Fail',
    DELETE_MOVIE = '[MOVIES] Delete Movie',
    DELETE_MOVIE_SUCCESS = '[MOVIES] Delete Movie Success',
    DELETE_MOVIE_FAIL = '[MOVIES] Delete Movie Fail'
}

export class LoadMovies implements Action {
    readonly type = MoviesActionType.LOAD_MOVIES;

    constructor(public payload: any = {}) { }
}

export class LoadMoviesSuccess implements Action {
    readonly type = MoviesActionType.LOAD_MOVIES_SUCCESS;

    constructor(public payload: Movie[]) { }
}

export class LoadMoviesFail implements Action {
    readonly type = MoviesActionType.LOAD_MOVIES_FAIL;

    constructor(public payload: any) { }
}

export class AddMovie implements Action {
    readonly type = MoviesActionType.ADD_MOVIE;

    constructor(public payload: Movie) { }
}

export class AddMovieSuccess implements Action {
    readonly type = MoviesActionType.ADD_MOVIE_SUCCESS;

    constructor(public payload: boolean) { }
}

export class AddMovieFail implements Action {
    readonly type = MoviesActionType.ADD_MOVIE_FAIL;

    constructor(public payload: any) { }
}

export class DeleteMovie implements Action {
    readonly type = MoviesActionType.DELETE_MOVIE;

    constructor(public payload: string) { }
}

export class DeleteMovieSuccess implements Action {
    readonly type = MoviesActionType.DELETE_MOVIE_SUCCESS;

    constructor(public payload: boolean) { }
}

export class DeleteMovieFail implements Action {
    readonly type = MoviesActionType.DELETE_MOVIE_FAIL;

    constructor(public payload: any) { }
}


export class ResetMovies implements Action {
    readonly type = MoviesActionType.DELETE_MOVIE;

    constructor() { }
}

export type MoviesAction = LoadMovies | LoadMoviesSuccess | LoadMoviesFail | AddMovie | AddMovieSuccess | AddMovieFail | DeleteMovie | DeleteMovieSuccess | DeleteMovieFail;