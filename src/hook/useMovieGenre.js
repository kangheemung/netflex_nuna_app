import { useQuery }from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = async() => {
    try {
        const response = await api.get('/genre/movie/list');
        return response.data.genres;
    } catch (error) {
        throw new Error('Failed to fetch popular movies');
    }
}

export const useMovieGenreQuery=() => {
    return  useQuery({
        queryKey:['movie-genre'],
        queryFn: fetchMovieGenre,
        staleTime: 300000,
    });
};