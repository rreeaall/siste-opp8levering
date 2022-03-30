const movie = {
    title: "Movie",
    name: "movie",
    type: "document",
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
        description: "Add the title of the movie",
      },
      {
        title: "Year",
        name: "year",
        type: "string",
        description: "The year the movie came out",
      },
      {
        type: "slug",
        name: "slug",
        title: "Slug",
        options: {
          source: "title",
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
        validation: (Rule) => Rule.required(),
      },
      {
        type: "image",
        name: "movieImage",
        title: "Movie image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "Actor",
        name: "actor",
        type: "reference",
        to: [{ type: "actor" }],
      },
    ],
    preview: {
      select: {
        title: "title",
        year: "year",
        actor: "actor.fullName",
        media: "movieImage",
      },
    },
  };
  
  export default movie;