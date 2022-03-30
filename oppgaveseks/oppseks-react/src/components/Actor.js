import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActor, getMoviesByActor } from "../lib/services/movieService";

export default function Actor() {
  const [actor, setActor] = useState([]);
  const [movies, setMovies] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const getPresentActor = async () => {
      const data = await getActor(name);
      setActor(data);
    };
    getPresentActor();
  }, [name]);

  useEffect(() => {
    const getActorMovies = async () => {
      const data = await getMoviesByActor(name);
      setMovies(data);
    };
    getActorMovies();
  }, [name]);

  return (
    <div>
      <h2>{actor.fullName}</h2>
      <span>
        <img
          src={actor.actorImage?.asset.url}
          alt="actorImage"
        />
      </span>
      <h3>{actor.fullName} i filmene under har skuespilleren enten hovedrolle eller siderolle</h3>

      {movies && movies.map((movie) => <h4>{movie.title}</h4>)}
    </div>
  );
}