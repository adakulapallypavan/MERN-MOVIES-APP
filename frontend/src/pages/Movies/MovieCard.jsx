import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div key={movie._id} className="w-[220px] h-[420px] rounded-lg mx-2">
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-[20rem] rounded-t-lg object-cover transition duration-300 ease-in-out transform group-hover:opacity-50"
        />
      </Link>
      <p className="text-lg font-semibold text-gray-300 text-center mt-2">
        {movie.name}
      </p>
    </div>
  );
};

export default MovieCard;
