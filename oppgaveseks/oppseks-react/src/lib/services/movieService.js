import client from "../client";

const movieFields = `
  _id,
  title,
  year,
  slug,
  'movieImage': movieImage{asset->{url}},
  'actor': actor->{'name': name.current, fullName, 'actorImage': actorImage{asset->{url}}}
`;

const currentMovieFields = `
  _id,
  title,
  year,
  slug,
  'movieImage': movieImage{asset->{url}},
  'actor': actor->{'name': name.current, fullName, 'actorImage': actorImage{asset->{url}}}
`;

const actorFields = `
  _id,
  fullName,
  'actorImage': actorImage{asset->{url}},
  name,
`;

const actorMoviesFields = `
  _id,
  title,
  year,
  'movieImage': movieImage{asset->{url}},
  'actor': actor->{fullName, "name": name.current}
`;

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`, {});
  return data;
};

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`, {});
  return data;
};

export const getMovie = async (slug) => {
  const data = await client.fetch(
    `*[_type == "movie" && slug.current == $slug]{${currentMovieFields}}`,
    {
      slug,
    }
  );
  return data?.[0];
};

export const getActor = async (name) => {
  const data = await client.fetch(
    `*[_type == "actor" && name.current == $name]{${actorFields}}`,
    {
      name,
    }
  );
  return data?.[0];
};

export const getActorByMovie = async (name) => {
  const data = await client.fetch(
    `*[_type == "movies" && actor->{'name': name.current, fullName]{${movieFields}}`,
    { name }
  );
  return data;
};

export const getMoviesByActor = async (name) => {
  const data = await client.fetch(
    `*[_type == "movie" && actor->name.current==$name]{${actorMoviesFields}}`,
    { name }
  );
  return data;
};