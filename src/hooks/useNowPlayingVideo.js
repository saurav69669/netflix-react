import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useNowPlayingVideo = ( movieId ) => {
  const dispatch = useDispatch();

  const getNowPlayingMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );

    const res = await data.json();
    
    const filteredTrailerVideo = res.results.filter((video) => video.type === "Trailer" && video.name === 'Official Trailer');
    const trailer = filteredTrailerVideo.length ? filteredTrailerVideo[0] : res.results[0];
    // console.log("trailer", trailer);
    
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getNowPlayingMovieVideo();
  }, []);

};

export default useNowPlayingVideo;
