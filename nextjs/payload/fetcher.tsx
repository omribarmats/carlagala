const parseJSON = (response: Response) => response.json();

const checkStatus = (response: Response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return parseJSON(response).then((parsedResponse) => {
    throw parsedResponse;
  });
};

export async function fetchData<T>(
  query: string,
  method: string,
  slug?: string
): Promise<T | null> {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`${process.env.PAYLOAD_SITE}/api/graphql`, {
      method,
      headers,
      body: JSON.stringify({ query }),
    })
      .then(checkStatus)
      .then(parseJSON);

    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching inner page:", error);
    throw error;
  }
}
