package spring.verzel_plus.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import spring.verzel_plus.model.Movie;

import java.util.ArrayList;
import java.util.List;

@Service
public class TmdbApiService {

    @Value("${tmdb.api.key}")
    private String apiKey;

    @Value("${tmdb.api.url}")
    private String apiUrl;

    public List<Movie> getPopularMovies() {
        RestTemplate restTemplate = new RestTemplate();
        String url = apiUrl + "/movie/popular?api_key=" + apiKey + "&language=pt-BR";

        ResponseEntity<JsonNode> response = restTemplate.getForEntity(url, JsonNode.class);
        JsonNode jsonNode = response.getBody();

        List<Movie> movies = new ArrayList<>();
        jsonNode.get("results").forEach(node -> {
            Movie movie = new Movie();
            movie.setId(node.get("id").asLong());
            movie.setTitle(node.get("title").asText());
            movie.setOverview(node.get("overview").asText());
            movie.setPosterPath(node.get("poster_path").asText());
            movie.setVoteAverage(node.get("vote_average").asDouble());
            movie.setReleaseDate(node.get("release_date").asText());
            movies.add(movie);
        });

        return movies;
    }

    public List<Movie> searchMovies(String query) {
        RestTemplate restTemplate = new RestTemplate();
        String url = apiUrl + "/search/movie?api_key=" + apiKey + "&query=" + query + "&language=pt-BR";
        ResponseEntity<JsonNode> response = restTemplate.getForEntity(url, JsonNode.class);
        JsonNode jsonNode = response.getBody();

        List<Movie> movies = new ArrayList<>();
        jsonNode.get("results").forEach(node -> {
            Movie movie = new Movie();
            movie.setId(node.get("id").asLong());
            movie.setTitle(node.get("title").asText());
            movie.setOverview(node.get("overview").asText());
            movie.setPosterPath(node.get("poster_path").asText());
            movie.setVoteAverage(node.get("vote_average").asDouble());
            movie.setReleaseDate(node.get("release_date").asText());
            movies.add(movie);
        });

        return movies;
    }

    public Movie getMovie(String movieId) {
        RestTemplate restTemplate = new RestTemplate();
        String url = apiUrl + "/movie/" + movieId + "?api_key=" + apiKey + "&language=pt-BR";
        ResponseEntity<JsonNode> response = restTemplate.getForEntity(url, JsonNode.class);
        JsonNode jsonNode = response.getBody();

        Movie movie = new Movie();
        movie.setId(jsonNode.get("id").asLong());
        movie.setTitle(jsonNode.get("title").asText());
        movie.setOverview(jsonNode.get("overview").asText());
        movie.setPosterPath(jsonNode.get("poster_path").asText());
        movie.setVoteAverage(jsonNode.get("vote_average").asDouble());
        movie.setReleaseDate(jsonNode.get("release_date").asText());

        return movie;
    }
}