import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite-service.service';
import { MovieService } from '../../services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css'],
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies: any[] = [];
  isLoading: boolean = true;

  constructor(
    private favoriteService: FavoriteService,
    public movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.favoriteService.getAllFavorites().subscribe((favorites) => {
      const movieDetailsObservables = favorites.map((favorite) =>
        this.movieService.getMovieDetails(favorite.movieId)
      );

      Promise.all(movieDetailsObservables.map((obs) => obs.toPromise())).then(
        (movies) => {
          this.favoriteMovies = movies.map((movie) => ({
            ...movie,
            favorite: true,
          }));
          this.isLoading = false;
        }
      );
    });
  }

  removeFavorite(movie: any): void {
    this.favoriteService.removeFavorite(movie).subscribe(
      () => {
        this.favoriteMovies = this.favoriteMovies.filter(
          (m) => m.id !== movie.id
        );
      },
      (error) => {
        console.error('Erro ao remover filme dos favoritos:', error);
      }
    );
  }

  shareLink(): void {
    const link = `${window.location.origin}/shared-favorites`;
    const message = `Confira esta lista de filmes favoritos que preparei para você! Acesse: ${link}`;
    navigator.clipboard.writeText(message).then(() => {
      alert(
        'Link compartilhável com mensagem copiado para a área de transferência!'
      );
    });
  }
}
