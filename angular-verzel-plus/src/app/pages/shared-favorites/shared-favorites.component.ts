import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite-service.service';
import { MovieService } from '../../services/movie-service.service';

@Component({
  selector: 'app-shared-favorites',
  templateUrl: './shared-favorites.component.html',
  styleUrls: ['./shared-favorites.component.css'],
})
export class SharedFavoritesComponent implements OnInit {
  favoriteMovies: any[] = [];
  isLoading: boolean = true;

  constructor(
    private favoriteService: FavoriteService,
    public movieService: MovieService
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
}
