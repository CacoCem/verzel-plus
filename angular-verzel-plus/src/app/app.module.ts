import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { SharedFavoritesComponent } from './pages/shared-favorites/shared-favorites.component';
import { HomeComponent } from './components/home/home.component';
import { MovieService } from './services/movie-service.service';
import { FavoriteService } from './services/favorite-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SearchBarComponent,
    HomePageComponent,
    FavoriteMoviesComponent,
    SharedFavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
  ],
  providers: [HttpClient, MovieService, FavoriteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
