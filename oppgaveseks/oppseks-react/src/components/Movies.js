import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../lib/services/movieService";

const Movies = () => {
  //Lage state som skal holde på data fra Sanity
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    getMovieList();
  }, []);

  return (
    <div>
      <h2> Her er film listen </h2>
      <ul>
        {movies &&
          movies?.map((movie, index) => (
            <li key={movie.slug}>
              <h2>{movie.title + " (" + movie.year + ")"}</h2>
              <h3>For mer informasjon om filmen, trykk på bildet.</h3>
              <Link
                to={"/movie/" + movie.slug.current}
                key={movie.slug.current}
              >
                <span key={index}>
                  <img
                    src={movie.movieImage?.asset.url}
                    alt="movie cover"
                  />                 
                </span>
              </Link>
              <h5>Her er Skuespillere:</h5>
              <Link to={`/actor/${movie.actor.name}`} key={movie.actor._id}>
                <span key={movie.actor._id}>{movie.actor.fullName}</span>
              </Link>
            </li>
          ))}
      </ul>
      <Link to={`/actors`}>
        <h2>
          Trykk her hvis du vil se en liste over alle skuespillere
        </h2>
      </Link>
    </div>
  );
};

export default Movies;

