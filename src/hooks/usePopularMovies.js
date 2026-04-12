import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)

        const res = await data.json();

        console.log("movies popular: ", res.results);
        dispatch(addPopularMovies(res.results));
    }

    useEffect(() => {
        getPopularMovies()
    }, [])

}

export default usePopularMovies;