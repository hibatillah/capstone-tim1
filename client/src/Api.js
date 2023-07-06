import useSWR from "swr";
import axios from "axios";

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
  axios.post(link, data)
    .then((res) => {
      console.log(res);
      return {status: res.status}
    })
    .catch((err) => {
      console.log(err);
    })
}