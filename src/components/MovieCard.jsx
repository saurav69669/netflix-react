import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {

    return (
        <img alt="movie image" src={IMAGE_CDN + posterPath}/>
    )
}

export default MovieCard;