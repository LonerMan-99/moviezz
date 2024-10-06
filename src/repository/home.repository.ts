import { BASE_URL } from "@/constants/Endpoints.constant";
import axios from "axios";
export const useHomeRepository = () => {
  const getAllDataMovies = async (
    category: string,
    page: number,
    search: string
  ) => {
    const handleUrl = () => {
      if (category !== "") {
        return `${BASE_URL}/movie/${category}?language=en-US&page=1`;
      }

      if (search !== "") {
        return `${BASE_URL}/search/movie?include_video=false&language=en-US&page=${page}&query=${encodeURIComponent(
          search
        )}`;
      }

      return `${BASE_URL}/discover/movie?include_video=false&language=en-US&page=${page}`;
    };

    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGFjZmMzYTlhOTZhYmYwNGQyN2NlNGIyOGRiODZhMSIsIm5iZiI6MTcyODA1MTM1OS44NjQ2MTUsInN1YiI6IjY2ZmZmNzZkZmEzZTY5ZTBlZjdjYzliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52KpgZiwOySOEXyeegKVM5cGmmeuHbzetudh9m-9UPY`,
      },
    };
    try {
      const response = await axios.get(handleUrl(), options);
      return response;
    } catch (error) {
      return error;
    }
  };
  return { getAllDataMovies };
};
