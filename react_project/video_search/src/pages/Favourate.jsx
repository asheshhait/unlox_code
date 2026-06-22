import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import "../css/Favourate.css"

export default function Favourate() {

    const [favorites, setFavorites] = useState([])

    const loadFavorites = () => {
        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || []

        setFavorites(storedFavorites)
    }

    useEffect(() => {

        loadFavorites()

        window.addEventListener(
            "favoritesUpdated",
            loadFavorites
        )

        return () => {
            window.removeEventListener(
                "favoritesUpdated",
                loadFavorites
            )
        }

    }, [])

    const toggleFavorite = (movie) => {

        const updatedFavorites = favorites.filter(
            fav => fav.id !== movie.id
        )

        setFavorites(updatedFavorites)

        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        )

        window.dispatchEvent(
            new Event("favoritesUpdated")
        )
    }

    if (favorites.length === 0) {
        return (
            <div className='favorites-empty'>
                <h2>No favorite movies yet</h2>

                <p>
                    Start adding movies to your favorites
                    and they will appear here.
                </p>
            </div>
        )
    }

    return (
        <div className='movies-grid'>

            {favorites.map((movie) => (
                <MovieCard
                    movie={movie}
                    key={movie.id}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                />
            ))}

        </div>
    )
}