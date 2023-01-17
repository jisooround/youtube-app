import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { instance } from "../../api/api";
import { useParams } from "react-router-dom";
const Search = () => {
  const [result, setResult] = useState<any>({});
  const { searchWord } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await instance.get(
      "/search?part=snippet&maxResults=10&q={searchWord}",
    );
    console.log(response);
    setResult(response.data.items[0].snippet.thumbnails.medium.url);
  };

  return (
    <div>
      <img src={result} alt="video" style={{ width: "300px" }} />
    </div>
  );
};
export default Search;
