import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();

    return (
        <>
            <div className="bg-linear-to-b from-black absolute w-full">
                <Header />
            </div>

            <MainContainer />

            <div className="secondary-container bg-[#141414]">
                <SecondaryContainer />
            </div>
        </>
    )
}

export default Browse;