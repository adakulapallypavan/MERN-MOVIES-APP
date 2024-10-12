import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetSpecificMovieQuery,
  useAddMovieReviewMutation,
} from "../../redux/api/movies";
import MovieTabs from "./MovieTabs";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingMovieReview }] =
    useAddMovieReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        id: movieId,
        rating,
        comment,
      }).unwrap();

      refetch();

      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error.data || error.message);
    }
  };

  return (
    
      <div className="p-4">
  <Link
    to="/"
    className="text-white font-semibold hover:underline"
  >
    Go Back
  </Link>

  <div className="mt-8">
    <div className="flex justify-center items-center">
      <img
        src={movie?.image}
        alt={movie?.name}
        className="w-[300px] h-[400px] rounded"
      />
    </div>

    {/* Container One */}
    <div className="flex flex-col lg:flex-row lg:justify-between mt-8 space-y-8 lg:space-y-0">
      <section className="lg:flex-1">
        <h2 className="text-3xl lg:text-5xl font-extrabold">{movie?.name}</h2>
        <p className="mt-4 text-gray-400 text-sm lg:text-base">
          {movie?.detail}
        </p>
      </section>

      <div className="lg:w-1/3 lg:ml-8">
        <p className="text-xl font-semibold">
          Releasing Date: {movie?.year}
        </p>

        <div className="mt-4">
          {movie?.cast.map((c) => (
            <ul key={c._id} className="list-disc pl-4">
              <li className="mt-2">{c}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-8">
      <MovieTabs
        loadingMovieReview={loadingMovieReview}
        userInfo={userInfo}
        submitHandler={submitHandler}
        rating={rating}
        setRating={setRating}
        comment={comment}
        setComment={setComment}
        movie={movie}
      />
    </div>
  </div>
</div>
  );
};

export default MovieDetails;
