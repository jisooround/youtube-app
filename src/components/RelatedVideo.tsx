import React, { useEffect, useState } from "react";
import { instance } from "../api/api";

function RelatedVideo() {
  const [data, setData] = useState([]);

  const getVideoData = async () => {
    const res = await instance.get(
      "/search?part=snippet&maxResults=10&relatedToVideoId=ZDHCU-j3y4Y&type=video",
    );
    setData(res.data.items);
  };

  useEffect(() => {
    getVideoData();
    console.log(data);
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default RelatedVideo