import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { instance } from "../../api/api";

const Home = () => {
  const [result, setResult] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await instance.get(
      "/search?part=snippet&maxResults=10&q={hello}",
    );
    console.log(response);

    // setResult(response.data.items[0].snippet.thumbnails.medium.url);
    // console.log(response.data.items[0].snippet.thumbnails.medium.url);
  };

  return (
    <div>
      {/* <img
        src={result.data.items[0].snippet.thumbnails.medium.url}
        alt="video"
        style={{ width: "300px" }}
      /> */}
    </div>
  );
};
export default Home;
