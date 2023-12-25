import { CollectionConfig } from "payload/types";
import { SEOgroup } from "./componennts/SEO";
import { anyone } from "../access/anyone";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

export const Pages: CollectionConfig = {
  slug: "pages",
  auth: false,
  admin: {
    useAsTitle: "seo.slug",
  },
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "title",
      label: "H1 Page title",
      type: "text",
      required: false,
    },
    {
      name: "contentLex",
      label: "Content",
      type: "richText",
      required: false,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("contentLex", {
      name: "content_html",
    }),
    SEOgroup,
  ],
};
