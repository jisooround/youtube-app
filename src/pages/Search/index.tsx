import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { instance } from "../../api/api";
import { useParams } from "react-router-dom";
const Search = () => {
  const [result, setResult] = useState<any>([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await instance.get(
      `/search?part=snippet&maxResults=10&q=${id}`,
    );
    console.log(response);
    setResult(response.data.items);
    // [0].snippet.thumbnails.medium.url
  };

  return (
    <div>
      {result.map((data: any) => {
        return (
          <img
            src={data.snippet.thumbnails.medium.url}
            alt="video"
            style={{ width: "300px", height: "200px" }}
          />
        );
      })}
    </div>
  );
};
export default Search;
