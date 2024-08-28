package spring.verzel_plus.controller;

import spring.verzel_plus.model.Movie;
import spring.verzel_plus.service.TmdbApiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "https://angular-verzel-plus-gw5m.vercel.app")
@RestController
public class TmdbApiController {

    @Autowired
    private TmdbApiService tmdbApiService;

    @GetMapping("/movies/popular")
    public List<Movie> getPopularMovies() {
        return tmdbApiService.getPopularMovies();
    }

    @GetMapping("/movies/search")
    public List<Movie> searchMovies(@RequestParam("query") String query) {
        return tmdbApiService.searchMovies(query);
    }

    @GetMapping("/movies/{movieId}")
    public Movie getMovie(@PathVariable String movieId) {
        return tmdbApiService.getMovie(movieId);
    }
}