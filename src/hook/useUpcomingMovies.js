
import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcoming = async () => {
    try {
            const response = await api.get(`/movie/upcoming`)
            return response.data;
    } catch (error) {
        throw new Error('Failed to fetch popular movies');
    }
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpcoming
  });
};

