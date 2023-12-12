export type seo = {
  title?: string;
  description?: string;
  excerpt?: string;
  image?: {
    url: string;
  };
  keywords?: string[];
};

export type menuRes =
  | {
      data: {
        Menus: {
          docs: {
            menuItems: {
              name: string;
              page: {
                seo: {
                  slug: string;
                };
              };
            }[];
          }[];
        };
      };
    }
  | undefined;

export type pageRes =
  | {
      data: {
        Pages: {
          docs: {
            title: "blog";
            content_html?: string;
            seo: seo;
          }[];
        };
      };
    }
  | undefined;
