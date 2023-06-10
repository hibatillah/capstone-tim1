import useSWR from "swr";

export const GetData = (link) => {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(link, fetcher);

  return {
    users: data,
    isLoading,
    isError: error,
  };
}

export const PostData = (link, data) => {
  const fetcher = (url) => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then((res) => res.json())
  .then((data) => data)

  const { data: response, error, isLoading } = useSWR(link, fetcher);

  return {
    response,
    isLoading,
    isError: error,
  };
}