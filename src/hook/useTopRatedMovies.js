import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRated =async() => {
  try {
    const response = await api.get('/movie/top_rated');
    return response.data;
    } catch (error) {
        throw new Error('Failed to fetch popular movies');
    }
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-top-rated"],
    queryFn: fetchTopRated
  })
}