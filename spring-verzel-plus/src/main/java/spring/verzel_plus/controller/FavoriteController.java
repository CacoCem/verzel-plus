package spring.verzel_plus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import spring.verzel_plus.model.Favorite;
import spring.verzel_plus.service.FavoriteService;
import spring.verzel_plus.model.ResponseMsg;

import java.util.List;

@CrossOrigin(origins = "https://angular-verzel-plus-gw5m.vercel.app")
@RestController
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @PostMapping("/favorite")
    public ResponseEntity<ResponseMsg> favoriteMovie(@RequestBody Favorite favorite) {
        try {
            favoriteService.favoriteMovie(favorite.getMovieId());
            ResponseMsg response = new ResponseMsg(
                    "O filme com ID " + favorite.getMovieId() + " foi favoritado com sucesso.",
                    true);
            return ResponseEntity.ok(response);
        } catch (IllegalStateException e) {
            ResponseMsg response = new ResponseMsg(e.getMessage(), false);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }

    @PostMapping("/unfavorite")
    public ResponseEntity<ResponseMsg> unfavoriteMovie(@RequestBody Favorite favorite) {
        try {
            favoriteService.unfavoriteMovie(favorite.getMovieId());
            ResponseMsg response = new ResponseMsg(
                    "O filme com ID " + favorite.getMovieId() + " foi desfavoritado com sucesso.",
                    true);
            return ResponseEntity.ok(response);
        } catch (IllegalStateException e) {
            ResponseMsg response = new ResponseMsg(e.getMessage(), false);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }

    @GetMapping("/favorites")
    public ResponseEntity<List<Favorite>> getAllFavorites() {
        List<Favorite> favorites = favoriteService.getAllFavorites();
        return ResponseEntity.ok(favorites);
    }

    @GetMapping("/favorites/{movieId}")
    public ResponseEntity<Boolean> isFavorite(@PathVariable Long movieId) {
        boolean isFavorite = favoriteService.isFavorite(movieId);
        return ResponseEntity.ok(isFavorite);
    }

    @GetMapping("/share-favorites")
    public ResponseEntity<List<Favorite>> shareFavorites() {
        List<Favorite> favorites = favoriteService.getAllFavorites();
        if (favorites.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(favorites);
        }
        return ResponseEntity.ok(favorites);
    }
}
