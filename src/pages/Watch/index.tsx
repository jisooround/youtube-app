import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getComments, getDescription, getVideoDetail } from "../../api/api";
import Comments from "../../components/Comments";
import Description from "../../components/Description";
import MainVideo from "../../components/MainVideo";
import RelatedVideo from "../../components/RelatedVideo";
import { commentsDummyData, videoDetailDummyData } from "../../data";
import type { IComment } from "../../types";

interface WatchProps {
  open: boolean;
}
//videoDetailData type
export interface VideoDetailData {
  kind: string;
  etag: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
  player: Player;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
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

export interface Localized {
  title: string;
  description: string;
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: ContentRating;
  projection: string;
}

export interface ContentRating {}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Player {
  embedHtml: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

const Watch = ({ open }: WatchProps) => {
  // type assertion
  const { id } = useParams() as { id: string };
  const [videoDetailData, setVideoDetailData] =
    useState<VideoDetailData>(videoDetailDummyData);

  const [comments, setComments] = useState<IComment[]>(() => commentsDummyData);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    // axios
    //   .all([
    //     getVideoDetail(id, setVideoDetailData, setIsError),
    //     getComments(id, setComments, setIsError),
    //   ])
    //   .catch((error) => setIsError(error.message));
  }, [id]);

  console.log(comments);

  return (
    <WatchContainer open={open}>
      <WatchPageWrapper>
        <MainVideo videoDetailData={videoDetailData} />
        <Description channelId="UCwQLh1dMRrT4WRjNKYzGHcw" />
        <Comments comments={comments} />
      </WatchPageWrapper>
      <RelatedVideo videoId={id} />
    </WatchContainer>
  );
};

const WatchPageWrapper = styled.div`
  max-width: 1000px;
  min-width: 500px;
  margin-right: 40px;
`;
const WatchContainer = styled.div<{ open: boolean }>`
  display: flex;
  padding: 5rem 3.5rem;
  margin-left: ${(props) => (props.open ? "240" : "0")}px;
  justify-content: center;
`;

export default Watch;
