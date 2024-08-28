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

@RestController
public class TmdbApiController {

    @Autowired
    private TmdbApiService tmdbApiService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/movies/popular")
    public List<Movie> getPopularMovies() {
        return tmdbApiService.getPopularMovies();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/movies/search")
    public List<Movie> searchMovies(@RequestParam("query") String query) {
        return tmdbApiService.searchMovies(query);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/movies/{movieId}")
    public Movie getMovie(@PathVariable String movieId) {
        return tmdbApiService.getMovie(movieId);
    }
}