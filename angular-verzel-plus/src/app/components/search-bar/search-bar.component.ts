import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service.service';
import { FavoriteService } from '../../services/favorite-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchQuery: string = '';
  favoriteMovies: any[] = [];

  constructor(
    private movieService: MovieService,
    private favoriteService: FavoriteService
  ) {}

  searchMovies(): void {
    if (this.searchQuery.trim() !== '') {
      this.searchMoviesByQuery();
    } else {
      this.getPopularMovies();
    }
  }

  searchMoviesByQuery(): void {
    this.movieService.searchMovies(this.searchQuery).subscribe({
      next: (response: any[]) => {
        this.movieService.movies = response;
        this.updateFavoriteMovies();
      },
      error: (error) => {
        console.error('Erro ao buscar filmes:', error);
      },
    });
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe(
      (response: any[]) => {
        this.movieService.movies = response;
        this.updateFavoriteMovies();
      },
      (error) => {
        console.error('Erro ao buscar filmes populares:', error);
      }
    );
  }

  private updateFavoriteMovies(): void {
    this.favoriteService.getAllFavorites().subscribe(
      (favorites) => {
        this.favoriteMovies = favorites;
        this.movieService.movies.forEach((movie) => {
          movie.favorite = this.favoriteMovies.some(
            (favorite) => favorite.movieId === movie.id
          );
        });
      },
      (error) => {
        console.error('Erro ao carregar filmes favoritos:', error);
      }
    );
  }
}
