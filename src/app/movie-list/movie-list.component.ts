import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie, initMovies } from '../common/model/movie.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMovieActions from './store/actions/movies.actions';
//import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MoviesService]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor(private store: Store<{movies: Movie[]}>, private service: MoviesService) {
    this.movies = [initMovies]
    }

  ngOnInit() {
    this.store.dispatch({ type: fromMovieActions.MoviesActionType.LOAD_MOVIES });
    //this.store.dispatch(new fromMovieActions.LoadMovies());
    this.movies$.subscribe(data => {
      this.movies = data;
    });
  }

}
