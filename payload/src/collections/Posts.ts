import { CollectionConfig } from "payload/types";
import { SEOgroup } from "./componennts/SEO";
import { anyone } from "../access/anyone";

export const Posts: CollectionConfig = {
  slug: "posts",
  auth: false,
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: anyone,
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
    SEOgroup,
  ],
};
