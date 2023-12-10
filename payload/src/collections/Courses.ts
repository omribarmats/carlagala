import { CollectionConfig } from "payload/types";

export const Courses: CollectionConfig = {
  slug: "courses",
  admin: {
    useAsTitle: "slug",
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
    },
  ],
};
