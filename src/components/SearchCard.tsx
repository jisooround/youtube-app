import { useState, useEffect } from "react";
import styled from "styled-components";
import { instance } from "../api";
import { timeAgo } from "../utils/timeAgo";
import { Search } from "../pages/Search";
import { nFormatter } from "../utils/nFormatter";
import { videoTime } from "../utils/videoTime";

const SearchCard = ({ data }: { data: Search }) => {
  const [videoResult, setVideoResult] = useState<Video>();
  const [channelResult, setChannelResult] = useState<Channel>();

  useEffect(() => {
    videoData();
    channelData();
  }, [data]);

  const videoData = async () => {
    const response = await instance.get(
      `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${data.id.videoId}`,
    );
    setVideoResult(response.data.items[0]);
  };

  const channelData = async () => {
    const response = await instance.get(
      `/channels?part=snippet&part=statistics&part=contentDetails&id=${data.snippet.channelId}`,
    );
    setChannelResult(response.data.items[0]);
  };

  // const videoDetail = JSON.parse(localStorage.getItem("video"));

  return (
    <>
      {videoResult && channelResult ? (
        <Section>
          <Card>
            <Video>
              <img src={data.snippet.thumbnails.medium.url} alt="video" />
              <Duration>
                <span>{videoTime(videoResult.contentDetails.duration)}</span>
              </Duration>
            </Video>
          </Card>
          <Info>
            <Title>{data.snippet.title}</Title>
            <Views>
              <span>
                조회수 {nFormatter(Number(videoResult.statistics.viewCount))}
              </span>
              {" • "}
              <span>{timeAgo(videoResult.snippet.publishedAt)}</span>
            </Views>
            <Name>
              <img src={channelResult.snippet.thumbnails.medium.url}></img>

              <span>{data.snippet.channelTitle}</span>
            </Name>
            <Descript>{data.snippet.description}</Descript>
          </Info>
        </Section>
      ) : null}
    </>
  );
};

const Section = styled.section`
  padding: 1.5rem 2rem;
  display: flex;
`;

const Card = styled.div`
  height: 200px;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.2px;
`;

const Video = styled.div`
  max-width: 360px;
  height: 200px;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  img {
    width: 360px;
    border-radius: 10px;
    height: 100%;
  }
`;

const Duration = styled.div`
  padding: 3px 4px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 12px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  line-height: 150%;
  font-size: 18px;
  cursor: pointer;
`;

const Views = styled.div`
  font-size: 12px;
  color: rgb(96, 96, 96);
  cursor: pointer;
`;

const Name = styled(Views)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  img {
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const Descript = styled(Views)``;

export interface Video {
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
export interface Channel {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface Snippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  localized: Localized;
  country: string;
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

export interface Localized {
  title: string;
  description: string;
}

export interface ContentDetails {
  relatedPlaylists: RelatedPlaylists;
}

export interface RelatedPlaylists {
  likes: string;
  uploads: string;
}

export interface Statistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export default SearchCard;
