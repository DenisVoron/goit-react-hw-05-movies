const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';


export async function fetchHome() {
    const response = await fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`);
    return await response.json();
}

export async function fetchMovies(query) {
    const response = await fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
    return await response.json();
}

export async function fetchMoviesDetails(id) {
    const response = await fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
    return await response.json();
};

export async function fetchCast(id) {
    const response = await fetch(`${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return await response.json();
}

export async function fetchReviews(id) {
    const response = await fetch(`${API_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return await response.json();
}

