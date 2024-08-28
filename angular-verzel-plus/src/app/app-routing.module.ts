import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { SharedFavoritesComponent } from './pages/shared-favorites/shared-favorites.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'minha-lista', component: FavoriteMoviesComponent },
  { path: 'shared-favorites', component: SharedFavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
