import { useEffect, useState } from "react";
import { instance } from "../../api/api";
import { useLocation } from "react-router-dom";
import SearchCard from "../../components/SearchCard";

const Search = () => {
  const [result, setResult] = useState<any>([]);

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
  const videoDetail = JSON.parse(localStorage.getItem("video"));

  return (
    <main>
      {result.map((data: {}, i: number) => {
        return <SearchCard data={data} key={i}></SearchCard>;
      })}
    </main>
  );
};

export default Search;
