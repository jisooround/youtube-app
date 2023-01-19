import React, { useEffect, useState } from "react";
import { getRelated } from "../api/api";

import RelatedCard from "./RelatedCard";
import styled from "styled-components";
import { relatedVideoDummyData } from "../data";

type Props = { videoId: string };

function RelatedVideo({ videoId }: Props) {
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    // getRelated(videoId, setData);
    setData(relatedVideoDummyData);
  }, [videoId]);

  return (
    <RelatedList>
      {data?.map((item) => (
        <RelatedCard key={item.id.videoId} item={item} />
      ))}
    </RelatedList>
  );
}

const RelatedList = styled.div`
  max-width: 400px;
`;

export type IData = Root2[];

export interface Root2 {
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
  standard: Standard;
  maxres: Maxres;
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

export interface Standard {
  url: string;
  width: number;
  height: number;
}

export interface Maxres {
  url: string;
  width: number;
  height: number;
}

export default RelatedVideo;
