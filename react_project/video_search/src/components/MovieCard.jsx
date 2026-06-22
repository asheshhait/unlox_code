import React from 'react'
import "../css/MovieCard.css"

function MovieCard({ movie, favorites, toggleFavorite }) {

    const isFavorite = favorites.some(
        fav => fav.id === movie.id
    )

    return (
        <div className='movie-card'>

            <div className='movie-poster'>

                <img
                    src={movie.image}
                    alt={movie.title}
                />

                <div className='movie-overlay'>
                    <button
                        className='favorite-btn'
                        onClick={() => toggleFavorite(movie)}
                    >
                        {isFavorite ? "💖" : "🤍"}
                    </button>
                </div>

            </div>

            <div className='movie-info'>
                <h3>{movie.title}</h3>

                <p>{movie.release_date}</p>

                <p>Director: {movie.director}</p>
            </div>

        </div>
    )
}

export default MovieCard