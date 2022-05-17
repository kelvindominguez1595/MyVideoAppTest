import { useEffect, useState } from "react";
import { moviesAPI } from "../configs/Services";
import { MoviesDataType, Result } from "../interfaces/MoviesInterface";

export const useMovies = () => {
    const [loading, setloading] = useState(true);
    const [dataMovies, setdataMovies] = useState<Result[]>([]);

    const getDataMovie = async () => {
        const {data} = await moviesAPI.get<MoviesDataType>('/popular');
        setdataMovies( data.results);
        setloading(false);
    }

    useEffect(() => {
        getDataMovie();
      }, []);
      return {
          dataMovies,
          loading
      }
}