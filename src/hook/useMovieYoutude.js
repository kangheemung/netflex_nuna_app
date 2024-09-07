import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieYoutube = ({id}) => {
  return api.get(`/movie/${id}/videos`)
};

export const useMovieYoutubeQuery = ({id}) => {
  return useQuery({
    queryKey: ["movie-Yoube", { id }],
    queryFn: () =>  fetchMovieYoutube({id}),
    select: (result) => result.data,
  });
};