import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
    useNowPlayingMovies();

    return (
        <>
            <div className="bg-linear-to-b from-black absolute w-full">
                <Header />
            </div>
            <MainContainer />
            <h2>Browse movies here</h2>
        </>
    )
}

export default Browse;