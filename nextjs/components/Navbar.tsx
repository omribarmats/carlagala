import { fetchData } from "@/payload/fetcher";
import { InternalLink } from "./links/InternalLink";
import { Menu } from "@/../payload/src/payload-types";
import { menuRes } from "@/app/res-types";

async function getData(menuSlug: string) {
  const query = `{
    Menus(where: { slug: { equals: "${menuSlug}" } }) {
      docs {
        menuItems {
          name
          page {
            seo {
              slug
            }
          }
        }
      }
    }
  }
  `;
  try {
    const res: menuRes | null = await fetchData(query, "POST");

    if (res && res.data.Menus.docs.length > 0) {
      return res;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching menu:", error);
    throw error;
  }
}

export default async function Navbar() {
  const data = await getData("nav-1");

  const menu = data?.data.Menus.docs[0].menuItems || [];

  return (
    <div className="flex flex-row h-max gap-16 justify-center py-4 bg-carla-grey max-w-[893px] mx-auto my-[15px] px-auto">
      <div className="w-max">
        <InternalLink
          element={process.env.SITE_NAME || "Carla Gala"}
          className="flex flex-row text-3xl items-center gap-2 font-bold"
          href="/"
          eventName="ClickInnerPage"
          target="HP"
          locationOnPage="Navbar"
        />
      </div>
      {menu && (
        <ul className="flex flex-row my-auto w-max text-sm items-center gap-10 font-normal">
          {menu.map((item, index) => {
            const name = item.name;
            const slug = item.page.seo.slug;
            return (
              <li key={index}>
                <InternalLink element={name} className="red" href={slug} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
