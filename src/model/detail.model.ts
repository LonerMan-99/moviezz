type Genre = {
  name: string;
};

type ProductionCompany = {
  logo_path: string;
  name: string;
};

export type DetailData = {
  backdrop_path: string;
  poster_path: string;
  title: string;
  original_title: string;
  vote_average: string;
  status: string;
  genres: Genre[];
  overview: string;
  production_companies: ProductionCompany[];
  homepage: string;
};
