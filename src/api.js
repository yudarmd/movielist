import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
    const movieList = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    console.log(movieList);
    return movieList.data.results;
}

export const searchMovie = async (query) => {
    const searchResult = await axios.get(`${baseUrl}/search/movie?query=${query}&api_key=${apiKey}`);
    return searchResult.data.results;
}

