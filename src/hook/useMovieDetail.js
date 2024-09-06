import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchDetailMovie = async(id) => {
    try {
        const response = await api.get(`/movie/${id}`);
        return response.data;
        } catch (error) {
        throw new Error('Failed to fetch popular movies');
    }
}


export const useDetailsMovieQuery = (id ) => {
    return useQuery({
        queryKey: ['movie', id],
        queryFn: () => fetchDetailMovie(id),
        config: {
            staleTime: 300000,
            onSuccess: (data) => console.log('Fetched movie details:', data),
        }
    });
};

