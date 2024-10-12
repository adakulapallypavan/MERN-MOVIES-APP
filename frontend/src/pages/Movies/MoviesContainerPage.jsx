import { useState } from "react";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies";
import { useFetchGenresQuery } from "../../redux/api/genre";
import SliderUtil from "../../component/SliderUtil";

const MoviesContainerPage = () => {
  const { data } = useGetNewMoviesQuery();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: genres } = useFetchGenresQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = data?.filter(
    (movie) => selectedGenre === null || movie.genre === selectedGenre
  );

  return (
    <div className="bg-black text-white min-h-screen py-8 px-4 lg:px-8">
      <section className="flex flex-col items-center w-full">
        <div className="w-full max-w-screen-xl mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">Choose For You</h1>
          <SliderUtil data={randomMovies} />
        </div>

        <div className="w-full max-w-screen-xl mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">Top Movies</h1>
          <SliderUtil data={topMovies} />
        </div>

        <div className="w-full max-w-screen-xl mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">Choose Movie</h1>
          <SliderUtil data={filteredMovies} />
        </div>
      </section>
    </div>
  );
};

export default MoviesContainerPage;
