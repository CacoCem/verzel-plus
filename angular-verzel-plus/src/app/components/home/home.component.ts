import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service.service';
import { FavoriteService } from '../../services/favorite-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];
  isLoading: boolean = true;

  constructor(
    public movieService: MovieService,
    public favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.movieService.getPopularMovies().subscribe((response: any[]) => {
      this.movieService.movies = response;
      this.favoriteService.getAllFavorites().subscribe((favorites) => {
        this.favoriteMovies = favorites;
        this.movieService.movies.forEach((movie) => {
          movie.favorite = this.favoriteMovies.some(
            (favorite) => favorite.movieId === movie.id
          );
        });
        this.isLoading = false;
      });
    });
  }

  toggleFavorite(movie: any): void {
    movie.favorite = !movie.favorite;
    if (movie.favorite) {
      this.favoriteService.addFavorite(movie).subscribe(
        () => {
          console.log('Filme adicionado aos favoritos com sucesso!');
        },
        (error) => {
          console.error('Erro ao adicionar filme aos favoritos:', error);
          movie.favorite = false; // revert favorite property if error occurs
        }
      );
    } else {
      this.favoriteService.removeFavorite(movie).subscribe(
        () => {
          console.log('Filme removido dos favoritos com sucesso!');
        },
        (error) => {
          console.error('Erro ao remover filme dos favoritos:', error);
          movie.favorite = true; // revert favorite property if error occurs
        }
      );
    }
  }
}
