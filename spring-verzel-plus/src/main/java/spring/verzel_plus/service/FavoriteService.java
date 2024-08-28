package spring.verzel_plus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.verzel_plus.model.Favorite;
import spring.verzel_plus.repository.FavoriteRepository;

@Service
public class FavoriteService {
    @Autowired
    private FavoriteRepository favoriteRepository;

    public void favoriteMovie(Long movieId) {
        Favorite favorite = new Favorite();
        favorite.setMovieId(movieId);
        favoriteRepository.save(favorite);
    }

    public void unfavoriteMovie(Long movieId) {
        Favorite favorite = favoriteRepository.findByMovieId(movieId);
        if (favorite != null) {
            favoriteRepository.delete(favorite);
        }
    }

    public List<Favorite> getAllFavorites() {
        return favoriteRepository.findAll();
    }

    public boolean isFavorite(Long movieId) {
        return favoriteRepository.existsByMovieId(movieId);
    }
}