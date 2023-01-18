import { useEffect, useState } from "react";
import { instance } from "../../api/api";
import { useLocation } from "react-router-dom";
import SearchCard from "../../components/SearchCard";

type SearchProps = {};

const Search = ({}: SearchProps) => {
  const [result, setResult] = useState<[]>([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchWord = query.get("q");

  useEffect(() => {
    fetchData();
  }, [searchWord]);

  const fetchData = async () => {
    try {
      const response = await instance.get(
        `/search?part=snippet&maxResults=10&q=${searchWord}`,
      );
      setResult(response.data.items);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const items = JSON.parse(localStorage.getItem("item")).data.items;

  return (
    <main>
      {result.map((data: Search, i: number) => {
        return <SearchCard data={data} key={data.id.videoId}></SearchCard>;
      })}
    </main>
  );
};
export interface Search {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}
export interface Id {
  kind: string;
  videoId: string;
}
export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}
export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}
export interface Default {
  url: string;
  width: number;
  height: number;
}
export interface Medium {
  url: string;
  width: number;
  height: number;
}
export interface High {
  url: string;
  width: number;
  height: number;
}

export default Search;
