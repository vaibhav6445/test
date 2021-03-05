import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { Movies } from './models/movies';

import { Details } from './models/details';
import { Trailer } from './models/trailer';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = Config.apiUrl;
  apiURLdtl = Config.apiURLdtl;
  apiURLgnr = Config.apiURLgnr;

  constructor(private http: HttpClient) {
  }


  // Movie list
  getAllGenres(): Observable<any> {
    return this.http.get<any>(`${this.apiURLgnr}?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAllMovies(id: number): Observable<Movies> {
    return this.http.get<Movies>(`${this.apiURL}${id}/movies?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Movie details
  getMovieDetails(id: number): Observable<Details> {
    return this.http.get<Details>(`${this.apiURLdtl}${id}?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  


  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
