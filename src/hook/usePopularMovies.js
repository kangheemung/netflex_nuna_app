import { useQuery } from "@tanstack/react-query";

import api from "../utils/api";
const fetchPopularMovies = async () => {
    try {
        const response = await api.get('/movie/popular');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch popular movies');
    }
};
export const usePopularMoviesQuery= ()=>{
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPopularMovies
    });
};