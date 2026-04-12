import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)

        const res = await data.json();

        console.log("movies upcoming: ", res.results);
        dispatch(addUpcomingMovies(res.results));
    }

    useEffect(() => {
        getUpComingMovies()
    }, [])

}

export default useUpcomingMovies;