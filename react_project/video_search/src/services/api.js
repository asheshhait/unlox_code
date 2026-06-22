// const API_KEY = ""
// const BASE_URL = ""
// export const getPopularMovie= async()=>{
//     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     const data = await response.json()
//     return data.results
// }

// export const getPopularMovie= async(query)=>{
//     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//     const data = await response.json()
//     return data.results
// }
const BASE_URL = "https://ghibliapi.vercel.app";

export const getMovies = async () => {
    const response = await fetch(`${BASE_URL}/films`);

    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    return data;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/films`);

    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    return data.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );
};