import React, { useEffect, useState } from "react";
import { instance } from "../api/api";
import RelatedCard from "./RelatedCard";

function RelatedVideo(): React.ReactElement {
  const [data, setData] = useState([]);

  const getVideoData = async () => {
    const res = await instance.get(
      "/search?part=snippet&maxResults=10&relatedToVideoId=ZDHCU-j3y4Y&type=video",
    );
    setData(res.data.items);
  };

  useEffect(() => {
    getVideoData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <RelatedCard item={item} />
      ))}
    </div>
  );
}

export interface Root {
  kind: string
  etag: string
  items: Item[]
}

export interface Item {
  kind: string
  etag: string
  id: Id
  snippet: Snippet
}

export interface Id {
  kind: string
  videoId: string
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export interface Thumbnails {
  default: Default
  medium: Medium
  high: High
  standard: Standard
  maxres: Maxres
}

export interface Default {
  url: string
  width: number
  height: number
}

export interface Medium {
  url: string
  width: number
  height: number
}

export interface High {
  url: string
  width: number
  height: number
}

export interface Standard {
  url: string
  width: number
  height: number
}

export interface Maxres {
  url: string
  width: number
  height: number
}


export default RelatedVideo;
