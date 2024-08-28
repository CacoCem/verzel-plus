package spring.verzel_plus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spring.verzel_plus.model.Favorite;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    Favorite findByMovieId(Long movieId);

    boolean existsByMovieId(Long movieId);
}
