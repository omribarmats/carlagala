import { CollectionConfig } from "payload/types";
import { SEOgroup } from "./componennts/SEO";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "title",
      label: "H1 Page title",
      type: "text",
      required: false,
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: false,
    },
    SEOgroup,
  ],
  admin: {
    useAsTitle: "seo.slug",
  },
};
