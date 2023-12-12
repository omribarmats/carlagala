/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    posts: Post;
    courses: Course;
    pages: Page;
    menus: Menu;
    media: Media;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Post {
  id: string;
  title: string;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  seo: Seo;
  updatedAt: string;
  createdAt: string;
}
export interface Seo {
  slug: string;
  title?: string | null;
  description?: string | null;
  excerpt?: string | null;
  image?: string | Media | null;
  keywords?:
    | {
        keyword?: string | null;
        id?: string | null;
      }[]
    | null;
}
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Course {
  id: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
}
export interface Page {
  id: string;
  title?: string | null;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  seo: Seo;
  updatedAt: string;
  createdAt: string;
}
export interface Menu {
  id: string;
  name: string;
  slug: string;
  menuItems: {
    name: string;
    page: string | Page;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}