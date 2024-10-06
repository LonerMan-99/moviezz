import { useEffect, useState } from "react";
import { useHomeRepository } from "@/repository/home.repository";
import { MovieList } from "@/model/home.model";
import { AxiosResponse } from "axios";

const useHomeHook = () => {
  const { getAllDataMovies } = useHomeRepository();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [moviesData, setMoviesData] = useState<MovieList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    setSelectedCategory("");
    setCurrentSearch(query);
  };

  const handleSelectedCategory = (query: string) => {
    setCurrentSearch("");
    setSelectedCategory(query);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleResetFilter = ()=>{
    setSelectedCategory("");
    setCurrentSearch("");
  }

  const handleGetAllMoviesData = async () => {
    setIsLoading(true);
    try {
      const data = (await getAllDataMovies(
        selectedCategory,
        currentPage,
        currentSearch
      )) as AxiosResponse;

      if (!data?.code) {
        setIsError(false);
        setMoviesData(data?.data?.results);
        setTotalPages(data?.data?.total_pages);
      } else {
        setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllMoviesData();
  }, [currentPage, currentSearch, selectedCategory]);

  return {
    moviesData,
    isLoading,
    currentPage,
    totalPages,
    handlePageChange,
    handleSearch,
    selectedCategory,
    handleSelectedCategory,
    currentSearch,
    isError,
    handleResetFilter
  };
};

export default useHomeHook;
