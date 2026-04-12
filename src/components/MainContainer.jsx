import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);

    if (!movies) return;

    const { original_title, overview, id } = movies[1];

    return (<div className="bg-[linear-gradient(77deg,rgba(0,0,0,0.6),transparent_85%)]">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>)
}

export default MainContainer;