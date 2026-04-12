import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log('Movies list: ', movies, title);

    return (
        <div className="py-4 pl-12">
            <h1 className="font-semibold text-2xl text-[#e5e5e5]">{title}</h1>
            <div className="flex gap-5 py-2 overflow-x-scroll no-scrollbar">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie?.poster_path} />
                ))}
            </div>
        </div>
    )
}

export default MovieList;