import "./MovieCard.css";

export default function MovieCard({
  movie,
  onToggleFavorite,
  onToggleRemoveCard,
  genre,
}) {
  return (
    <div className="movie-card">
      <h3>
        {movie.title} ({movie.released})
      </h3>
      <h5>{movie.director}</h5>
      <p className="genre">{genre}</p>
      <p className="favorite-icon" onClick={onToggleFavorite}>
        {movie.favorite === true ? "🩷" : "🩶"}
      </p>
      <p className="remove-icon" onClick={onToggleRemoveCard}>
        -
      </p>
    </div>
  );
}
