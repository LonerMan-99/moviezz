import axios from "axios";
import { BASE_URL } from "@/constants/Endpoints.constant";

export const useDetailRepository = () => {
  const getDetailMovie = async (movieId: string | string[] | undefined) => {
    const url = `${BASE_URL}/movie/${movieId}?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGFjZmMzYTlhOTZhYmYwNGQyN2NlNGIyOGRiODZhMSIsIm5iZiI6MTcyODA1MTM1OS44NjQ2MTUsInN1YiI6IjY2ZmZmNzZkZmEzZTY5ZTBlZjdjYzliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52KpgZiwOySOEXyeegKVM5cGmmeuHbzetudh9m-9UPY`,
      },
    };

    try {
      const response = await axios.get(url, options);
      return response;
    } catch (error) {
      return error;
    }
  };

  return {
    getDetailMovie,
  };
};
