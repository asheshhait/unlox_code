import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { getMovies, searchMovies } from '../services/api.js'
import "../css/Home.css"

export default function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])

    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    )

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await getMovies()
                setMovies(data)
            } catch (error) {
                console.log(error)
            }
        }

        loadMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) {
            const data = await getMovies()
            setMovies(data)
            return
        }

        try {
            const data = await searchMovies(searchQuery)
            setMovies(data)
        } catch (error) {
            console.log(error)
        }
    }

    const toggleFavorite = (movie) => {

        const exists = favorites.some(
            fav => fav.id === movie.id
        )

        let updatedFavorites

        if (exists) {
            updatedFavorites = favorites.filter(
                fav => fav.id !== movie.id
            )
        } else {
            updatedFavorites = [...favorites, movie]
        }

        setFavorites(updatedFavorites)

        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        )

        window.dispatchEvent(new Event("favoritesUpdated"))
    }

    return (
        <div className='home'>

            <form onSubmit={handleSearch} className='search-form'>

                <input
                    type="text"
                    placeholder='Search for movies'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button
                    type="submit"
                    className='search-button'
                >
                    Search
                </button>

            </form>

            <div className='movies-grid'>

                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                    />
                ))}

            </div>

        </div>
    )
}