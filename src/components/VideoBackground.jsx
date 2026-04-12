import { useSelector } from "react-redux";
import useNowPlayingVideo from "../hooks/useNowPlayingVideo";

const VideoBackground = ({ movieId }) => {

    useNowPlayingVideo(movieId);

    const trailerVideo = useSelector((state) => state.movies?.trailerVideo)

    return (
        <div>
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground;