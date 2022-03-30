import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../lib/services/movieService";

const Movie = () => {
  const [movie, setMovie] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    const getPresentMovie = async () => {
      const data = await getMovie(slug);
      setMovie(data);
    };
    getPresentMovie();
  }, [slug]);

  return (
    <div>
      <h2>Film</h2>
      <h2>{movie.title}</h2>
      <span>
        <img
          src={movie.movieImage?.asset.url}
          alt="movie cover"
        />
      </span>
    </div>
  );
};

export default Movie;