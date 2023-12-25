import type { Field } from "payload/types";

export const SEOgroup: Field = {
  name: "seo",
  label: "SEO Meta Data",
  type: "group",
  interfaceName: "seo",
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    {
      name: "title",
      label: "SEO title",
      type: "text",
      required: false,
      minLength: 5,
      maxLength: 60,
    },
    {
      name: "description",
      label: "SEO Description",
      type: "textarea",
      required: false,
      minLength: 40,
      maxLength: 160,
    },
    {
      name: "excerpt",
      label: "Excerpt",
      type: "textarea",
      required: false,
      minLength: 40,
      maxLength: 160,
    },
    {
      name: "image",
      label: "Featured image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "keywords",
      label: "SEO Keywords",
      type: "array",
      required: false,
      fields: [
        {
          name: "keyword",
          type: "text",
        },
      ],
    },
  ],
};
