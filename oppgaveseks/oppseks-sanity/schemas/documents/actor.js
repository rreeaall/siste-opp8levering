const actor = {
    title: "Actor",
    name: "actor",
    type: "document",
    fields: [
      {
        type: "string",
        title: "Full name",
        name: "fullName",
        description: "Her er det fulle navnet på skuespilleren",
      },
      {
        type: "image",
        name: "actorImage",
        title: "Actor image",
        options: {
          hotspot: true,
        },
      },
      {
        type: "slug",
        title: "Name",
        name: "name",
        options: {
          source: "fullName",
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: "fullName",
        subtitle: "name.current",
        media: "actorImage",
      },
    },
  };
  
  export default actor;