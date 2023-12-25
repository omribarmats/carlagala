import { CollectionConfig } from "payload/types";
import { anyone } from "../access/anyone";

export const Menus: CollectionConfig = {
  slug: "menus",
  auth: false,
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "name",
      label: "Menu name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "slug",
      type: "text",
      required: true,
    },
    {
      name: "menuItems",
      label: "Menu items",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "page",
          label: "Page",
          type: "relationship",
          relationTo: "pages",
          required: true,
          hasMany: false,
        },
      ],
    },
  ],
};
