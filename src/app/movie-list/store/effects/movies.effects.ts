import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { MoviesService } from '../../movies.service';

import * as fromMovieActions from '../actions/movies.actions';
import { LoadMovies } from '../actions/movies.actions';

@Injectable()
export class MoviesEffects {

//   loadMovies$ = createEffect(() => this.actions$.pipe(
//     ofType(fromMovieActions.MoviesActionType.LOAD_MOVIES),
//     switchMap(action: LoadMovies) => {
//         return this.moviesService.getAllMovies()
//       .pipe(
//         map(movies => new fromMovieActions.LoadMoviesSuccess(movies)),
//         catchError(error => {return of(new fromMovieActions.LoadMoviesFail)})
//       )
//     })
    
//   );

loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(fromMovieActions.MoviesActionType.LOAD_MOVIES),
    mergeMap(() => this.moviesService.getAllMovies()
      .pipe(
        map(movies => ({ type: fromMovieActions.MoviesActionType.LOAD_MOVIES_SUCCESS, payload: movies })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}