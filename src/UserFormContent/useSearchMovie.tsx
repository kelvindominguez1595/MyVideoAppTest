import { useEffect, useState } from "react";
import { searchAPI } from "../configs/Services";
import { SearchMovies, SearchResult, } from "../interfaces/SearchInterface";


export const useSearchMovies = (query: string) => {
    const [loading, setloading] = useState(true);
    const [movies, setdataMovies] = useState<SearchResult[]>([]);
    const [searchtxt, setsearchtxt] = useState('');

    const getDataMovie = async () => {
        const {data} = await searchAPI.get<SearchMovies>(`/movie?query=${query}`);

        setdataMovies(data.results);
        setsearchtxt(query);
        setloading(false);
    }

    useEffect(() => {
        console.log(query)
        getDataMovie();
      }, [query]);
      
      return {
          movies,
          loading,
          searchtxt
      }
}