import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../common/model/movie.model';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {

  _baseURL: string = "api/Movies/Title";

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("https://localhost:44395/api/Movies");
  }

}