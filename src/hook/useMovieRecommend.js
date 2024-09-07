// Genie: It seems like there is an issue with the implementation of your useMovieRecommendQuery hook. The error message indicates that it failed to fetch popular movies.
// Here is a revised version of your code to address this issue:

import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieRecommend = async ({id}) => {
  try {
    const response = await api.get(`/movie/${id}/recommendations`); // Fixed template literal to include movie_id
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie recommendations'); // Updated error message
  }
};

export const useMovieRecommendQuery = ({id}) => {
    return useQuery({
      queryKey: ['movie-recommend', {id}],
      queryFn: () => fetchMovieRecommend({id}),
      staleTime: 300000,
    });
  };