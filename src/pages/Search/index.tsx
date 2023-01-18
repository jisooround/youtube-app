import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { instance } from "../../api";
import SearchCard from "../../components/SearchCard";

<<<<<<< Updated upstream
const Search = () => {
  const [result, setResult] = useState<Search[]>([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchWord = query.get("q");
=======
const Search = ({ open }: { open: boolean }) => {
  const [result, setResult] = useState<any>([]);
  const { id } = useParams();
  console.log(id);
>>>>>>> Stashed changes

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

  // localStorage.setItem("item", JSON.stringify(result));

  return (
    <main>
      {result.map((data: Search) => {
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
