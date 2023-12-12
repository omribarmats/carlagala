import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  // auth: {
  //   cookies: {
  //     secure: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL !== "development",
  //     sameSite:
  //       process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL === "testing"
  //         ? "none"
  //         : "lax",
  //   },
  // },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
    },
  ],
};

export default Users;
