import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieYoutube = async (id ) => {
  try {
    const response = await api.get(`/movie/${id}/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie YouTube data:", error);
    throw new Error("Failed to fetch movie YouTube data");
  }
};

export const useMovieYoutubeQuery = (id) => {
  return useQuery({
    queryKey: ["movie-YouTube",  id ],
    queryFn: () => fetchMovieYoutube(id),
    select: (data) => data.results,
    onError: (error) => {
      console.error("An error occurred while fetching movie YouTube data:", error);
    },
    onSettled: (data, error) => {
      if (error) {
        console.error("Fetch movie YouTube data failed:", error);
      }
    },
  });
};
