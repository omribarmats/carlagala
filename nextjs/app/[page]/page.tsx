import { fetchData } from "@/payload/fetcher";
import { pageRes } from "../res-types";
import parse from "html-react-parser";

type Props = {
  params: { page: string };
};

async function getData(pageSlug: string): Promise<pageRes | null> {
  const query = `{
    Pages(where: { seo__slug: { equals: "${pageSlug}" } }) {
      docs {
        title
        content_html
        seo {
          title
          description
          excerpt
          image {
            url
          }
          keywords {
            keyword
          }
        }
      }
    }
  }
  `;
  try {
    const res: pageRes | null = await fetchData(query, "POST");

    if (res && res.data?.Pages.docs.length > 0) {
      return res;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching menu:", error);
    throw error;
  }
}

export default async function Page({ params }: Props) {
  const data = await getData(params.page);

  console.log("dataPage: ", data);

  const page = data?.data.Pages.docs[0];
  const pageTitle = page?.title;
  const pageContent = page?.content_html;
  console.log(pageContent);
  return (
    <div className="">
      <h1>{pageTitle}</h1>
      {pageContent && parse(pageContent)}
    </div>
  );
}
