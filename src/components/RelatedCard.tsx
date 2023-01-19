import React, { useState, useEffect } from "react";
import { instance } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { displayedAt } from "../utils/displayedAt";
import { nFormatter } from "../utils/nFormatter";
import { videoTime } from "../utils/videoTime";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiListCheck, BiDotsVerticalRounded } from "react-icons/bi";

type Props = { item: Root };

function RelatedCard({ item }: Props) {
  const videoDate: number = new Date(item.snippet.publishTime).getTime();

  const [videoView, setVideoView] = useState<string | number>(0);
  const [time, setTime] = useState<string>("");
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const getDetail = async (videoId = item.id.videoId) => {
    const res = await instance.get(
      `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`,
    );
    const view = nFormatter(res.data.items[0].statistics.viewCount);
    setVideoView(view);
    const vTime = videoTime(res.data.items[0].contentDetails.duration);
    setTime(vTime);
  };

  item.id.videoId;
  useEffect(() => {
    // getDetail();
    setVideoView(nFormatter(100000));
    setTime(videoTime("PT1H15M15S"));
  }, []);
  const watchLink = `/watch/${item.id.videoId}`
  return (
    <Link to={watchLink}>
      <VideoCard
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <PreviewBox>
          <Thumbnail src={item.snippet.thumbnails.medium.url} />
          <VideoTime>{time}</VideoTime>
          {isHovering ? (
            <HoverBox>
              <AiOutlineClockCircle />
              <BiListCheck />
            </HoverBox>
          ) : (
            null
          )}
        </PreviewBox>
        <DetailBox>
          <RelatedTitle>{item.snippet.title}</RelatedTitle>
          {isHovering ? (
            <MoreInfoBtn>
              <BiDotsVerticalRounded />
            </MoreInfoBtn>
          ) : (
            null
          )}
          <RelatedChannel>{item.snippet.channelTitle}</RelatedChannel>
          <InfoBox>
            <p>조회수 {videoView}</p>
            <InfoDot> • </InfoDot>
            <p>{displayedAt(videoDate)}</p>
          </InfoBox>
        </DetailBox>
      </VideoCard>
    </Link>
  );
}
const PreviewBox = styled.div`
  position: relative;
  width: 160px;
  height: 90px;
  cursor: pointer;
`;
const VideoTime = styled.span`
  position: absolute;
  background-color: #000000c0;
  padding: 4px;
  right: 5px;
  bottom: 5px;
  font-size: 12px;
  border-radius: 3px;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 5px;
`;
const VideoCard = styled.div`
  max-width: 400px;
  min-width: 300px;
  display: flex;
  height: 90px;
  margin-bottom: 10px;
  :hover h3 {
    font-weight: 500;
  }
`;
const RelatedTitle = styled.h3`
  width: 90%;
  font-size: 14px;
  text-overflow: ellipsis;
  font-weight: 400;
  overflow: hidden;
  word-break: break-word;
  line-height: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;
const RelatedChannel = styled.p`
  font-size: 12px;
  font-weight: 300;
  cursor: pointer;
  :hover {
    font-weight: 500;
  }
`;
const DetailBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 160px);
  padding-left: 12px;
`;

const InfoBox = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
`;
const InfoDot = styled.span`
  margin: 0 3px;
`;

const HoverBox = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 3px;
  top: 5px;
  right: 5px;
  svg {
    font-size: 16px;
    background-color: #000000c0;
    border-radius: 3px;
    padding: 3px;
    color: #fff;
    cursor: pointer;
  }
`;
const MoreInfoBtn = styled.div`
  position: absolute;
  right: 0px;
  top: 5px;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

export interface Root {
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

export default RelatedCard;
