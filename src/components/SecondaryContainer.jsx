import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((state) => state?.movies);

    return (
        movies.nowPlayingMovies &&
        <div className="-mt-70">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>

    )
}

export default SecondaryContainer;