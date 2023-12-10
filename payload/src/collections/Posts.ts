import { CollectionConfig } from "payload/types";

export const Posts: CollectionConfig = {
  slug: "posts",
  auth: false,
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: false,
    },
  ],
};
