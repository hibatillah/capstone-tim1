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

const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const Get = async (link) => {
  try {
    const res = await api.get(link)
    console.log(res.data)
    return res.data
  }
  catch (err) {
    console.log(err);
  }
}

export const PostData = (link, data) => {
  api.post(link, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const PuttData = (link, id, data) => {
  api.put(`${link}/${id}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}