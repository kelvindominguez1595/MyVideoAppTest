import { useEffect, useState } from "react";
import { moviesAPI } from "../configs/Services";
import { RecomendationResult, RecomendationsMovies } from "../interfaces/MoviesInterface";

export const useRecomendationsMovie = (id: number) => {
    const [loadingRecoment, setloading] = useState(true);
    const [recomendsMovies, setdataMovies] = useState<RecomendationResult[]>([]);

    const getDataMovie = async () => {
        const {data} = await moviesAPI.get<RecomendationsMovies>( `/${id}/recommendations`);

        setdataMovies(data.results);
        setloading(false);
    }

    useEffect(() => {
        getDataMovie();
      }, [id]);
      return {
          recomendsMovies,
          loadingRecoment
      }
}