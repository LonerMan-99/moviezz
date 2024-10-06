"use client";

import { DEFAULT_VALUE_DETAIL_DATA } from "@/constants/Detail.constant";
import { DetailData } from "@/model/detail.model";
import { useDetailRepository } from "@/repository/detail.repository";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useDetailHook = () => {
  const router = useRouter();
  const { detail } = router.query;
  const { getDetailMovie } = useDetailRepository();

  const [detailMovie, setDetailMovie] = useState<DetailData>(
    DEFAULT_VALUE_DETAIL_DATA
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleBack = () => {
    router.push("/");
  };

  const getDetailMovieData = async () => {
    setIsLoading(true);
    try {
      const response = (await getDetailMovie(detail)) as AxiosResponse;
      if (!response?.code) {
        setIsError(false);
        setDetailMovie(response.data);
      } else {
        setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if(detail){
      getDetailMovieData();
    }
  
  }, [detail]);

  return {
    detailMovie,
    handleBack,
    isLoading,
    isError,
  };
};

export default useDetailHook;
