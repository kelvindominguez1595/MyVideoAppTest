import axios from "axios";
import { LOGIN_API, MOVIE_API } from "./urls";

export const apiLogin = axios.create({baseURL: LOGIN_API});
export const moviesAPI = axios.create({baseURL: MOVIE_API, params: {
    api_key: 'c3a750246625612dad2141aa02c6da2a',
    language: 'en-EN'
}});