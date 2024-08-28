import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private apiUrl = 'https://spring-verzel-plus.onrender.com';

  constructor(private http: HttpClient) {}

  addFavorite(movie: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/favorite`, { movieId: movie.id });
  }

  removeFavorite(movie: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/unfavorite`, { movieId: movie.id });
  }

  getAllFavorites(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/favorites`);
  }
}
