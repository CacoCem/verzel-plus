import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://spring-verzel-plus.onrender.com/movies';

  // Declare a property 'movies' to hold the list of movies
  movies: any[] = [];

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any[]> {
    const url = `${this.apiUrl}/popular`;
    return this.http.get<any[]>(url);
  }

  searchMovies(query: string): Observable<any[]> {
    const url = `${this.apiUrl}/search`;
    const params = { query: query };
    return this.http.get<any[]>(url, { params });
  }

  getMovieDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }

  getRatingClass(voteAverage: number): string {
    if (voteAverage >= 7) {
      return 'good-rating';
    } else if (voteAverage >= 4) {
      return 'average-rating';
    } else {
      return 'bad-rating';
    }
  }

  getRatingColor(voteAverage: number): string {
    if (voteAverage >= 7) {
      return 'green';
    } else if (voteAverage >= 4) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  getFavoriteIconUrl(isFavorite: boolean): string {
    return isFavorite ? 'assets/heart-filled.svg' : 'assets/heart-empty.svg';
  }
}
