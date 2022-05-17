import { useEffect, useState } from "react";
import { moviesAPI } from "../configs/Services";
import { DetailsMovie } from "../interfaces/MoviesInterface";

export const useMovieDetails = (id: number) => {
    const [loading, setloading] = useState(true);
    const [dataMovies, setdataMovies] = useState<DetailsMovie>();

    const getDataMovie = async () => {
        const {data} = await moviesAPI.get<DetailsMovie>( `/${id}`);
        setdataMovies(data);
        setloading(false);
    }

    useEffect(() => {
        getDataMovie();
      }, [id]);
      return {
          dataMovies,
          loading
      }
}