import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)

        const res = await data.json();

        console.log("movies upcoming: ", res.results);
        dispatch(addTopRatedMovies(res.results));
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [])

}

export default useTopRatedMovies;