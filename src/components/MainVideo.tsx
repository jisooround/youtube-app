import { instance } from "../api/api";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

type MainVideoProps = {};

export interface videoDetailData {
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

const MainVideo = ({}: MainVideoProps) => {
  const initialData = {
    kind: "youtube#videoListResponse",
    etag: "UaVhWWfFRX6oOr9PuxvQGoIRITU",
    items: [
      {
        kind: "youtube#video",
        etag: "s43bWhmTNZVZVZZ0lWueAgD96s4",
        id: "ZDHCU-j3y4Y",
        snippet: {
          publishedAt: "2023-01-15T19:00:11Z", // O
          channelId: "UCwQLh1dMRrT4WRjNKYzGHcw",
          title: "The History Of Reworks That FAILED In League Of Legends", // O
          description:
            "Throughout League's entire history, many champions were reworked or reimagined to have a more healthy, modernized, and engaging playstyle. For the most part, the majority of them have turned out for the better, but there were a few that turned out so bad that they actually had to get REVERTED (or in some cases reworked again). Today we'll be going through some of League's Failed Reworks!\n\nLeague of Legends Discussion Playlist: https://bit.ly/3dzJuUZ\n\nCheck out my Genshin Impact channel! https://bit.ly/3HQN9ud\nCheck out my Smash Bros channel! https://bit.ly/3rlFD3Z\n\nSupport me on Patreon! https://bit.ly/3iy5pvu\nDonate to the channel! https://bit.ly/36TpIQP\n\n~Editor (TofuGraphics)~\nTwitter: https://twitter.com/TofuGraphics\n\n~Contact Links~\nFacebook: https://bit.ly/3lGV9Vg\nTwitter: https://bit.ly/3kv7CZU\nDiscord: https://bit.ly/33M2iev\nTwitch: https://bit.ly/2XNes31\nCandle.gg: https://bit.ly/3ndfU9r\nEmail: varsverum@gmail.com (Business inquiries only)\n\nGraphics provided by: https://twitter.com/TofuGraphics\n\n#LoL #Fail #Reworks",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ZDHCU-j3y4Y/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/ZDHCU-j3y4Y/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/ZDHCU-j3y4Y/hqdefault.jpg",
              width: 480,
              height: 360,
            },
            standard: {
              url: "https://i.ytimg.com/vi/ZDHCU-j3y4Y/sddefault.jpg",
              width: 640,
              height: 480,
            },
            maxres: {
              url: "https://i.ytimg.com/vi/ZDHCU-j3y4Y/maxresdefault.jpg",
              width: 1280,
              height: 720,
            },
          },
          channelTitle: "Vars",
          tags: [
            "vars",
            "varsverum",
            "league of legends",
            "lol",
            "vars lol",
            "league of legends gameplay",
            "lol discussion",
            "vars league of legends",
            "why no one plays",
            "lol why no one plays",
            "lol rework",
            "lol rengar rework",
            "lol asol rework",
            "lol aurelion sol rework",
            "lol zac",
            "lol zac ultimate",
            "lol leblanc rework",
            "lol leblanc revert",
            "lol rengar revert",
            "rework",
            "lol new aurelion sol",
            "lol aurelion sol abilities",
            "reworks in league of legends",
            "lol kog'maw 5.0 attack speed",
            "lol ryze",
          ],
          categoryId: "20",
          liveBroadcastContent: "none",
          localized: {
            title: "The History Of Reworks That FAILED In League Of Legends",
            description:
              "Throughout League's entire history, many champions were reworked or reimagined to have a more healthy, modernized, and engaging playstyle. For the most part, the majority of them have turned out for the better, but there were a few that turned out so bad that they actually had to get REVERTED (or in some cases reworked again). Today we'll be going through some of League's Failed Reworks!\n\nLeague of Legends Discussion Playlist: https://bit.ly/3dzJuUZ\n\nCheck out my Genshin Impact channel! https://bit.ly/3HQN9ud\nCheck out my Smash Bros channel! https://bit.ly/3rlFD3Z\n\nSupport me on Patreon! https://bit.ly/3iy5pvu\nDonate to the channel! https://bit.ly/36TpIQP\n\n~Editor (TofuGraphics)~\nTwitter: https://twitter.com/TofuGraphics\n\n~Contact Links~\nFacebook: https://bit.ly/3lGV9Vg\nTwitter: https://bit.ly/3kv7CZU\nDiscord: https://bit.ly/33M2iev\nTwitch: https://bit.ly/2XNes31\nCandle.gg: https://bit.ly/3ndfU9r\nEmail: varsverum@gmail.com (Business inquiries only)\n\nGraphics provided by: https://twitter.com/TofuGraphics\n\n#LoL #Fail #Reworks",
          },
          defaultAudioLanguage: "en",
        },
        contentDetails: {
          duration: "PT15M1S",
          dimension: "2d",
          definition: "hd",
          caption: "false",
          licensedContent: true,
          contentRating: {},
          projection: "rectangular",
        },
        statistics: {
          viewCount: "50299", // O
          likeCount: "2700", // O
          favoriteCount: "0",
          commentCount: "289",
        },
        player: {
          // O
          embedHtml:
            '<iframe width="480" height="270" src="//www.youtube.com/embed/ZDHCU-j3y4Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        },
      },
    ],
    pageInfo: {
      totalResults: 1,
      resultsPerPage: 1,
    },
  };
  const [videoDetailData, setVideoDetailData] =
    useState<videoDetailData | null>(null);

  const tags = videoDetailData?.items[0].snippet.tags.map((tag, index) => {
    if (index < 4) return <Tag key={index}>#{tag}</Tag>;
  });

  const handleViewCount = (): string => {
    let viewCount = Number(
      videoDetailData?.items[0]?.statistics?.viewCount,
    ).toLocaleString("ko-kr");
    if (viewCount === "NaN") viewCount = "";
    return viewCount;
  };

  const handleDate = (): string => {
    const months = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let temp = videoDetailData?.items[0]?.snippet?.publishedAt.split("-");
    let date = "";
    if (temp)
      date +=
        months[Number(temp[1] || 0)] +
        " " +
        temp[2].substring(0, 2) +
        ", " +
        temp[0];
    return date;
  };

  const handleLikeCount = (): string => {
    let likeCount = (
      Number(videoDetailData?.items[0].statistics.likeCount) / 1000
    ).toFixed(1);
    if (likeCount === "NaN") likeCount = "";
    return likeCount;
  };

  const getVideoData = async () => {
    try {
      const { data } = await instance.get(
        "/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=ZDHCU-j3y4Y",
      );
      setVideoDetailData(data);
      console.log(data);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  useEffect(() => {
    // getVideoData();
    setVideoDetailData(initialData);
  }, []);

  return (
    <VideoContainer>
      <VideoPlayer
        dangerouslySetInnerHTML={{
          __html: videoDetailData?.items[0]?.player?.embedHtml || "",
        }}
      ></VideoPlayer>
      <Tags>{tags}</Tags>
      <Title>{videoDetailData?.items[0]?.snippet?.title}</Title>
      <div>
        {handleViewCount() || ""}
        {" views • "}
        {handleDate() || ""}
      </div>
      <ButtonWrapper>
        <LikeContainer>
          <Button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
            </svg>
            <span>{handleLikeCount()}K</span>
          </Button>
          <Button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"></path>
            </svg>
          </Button>
        </LikeContainer>
        <Button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"></path>
            </g>
          </svg>
          <span>SHARE</span>
        </Button>
        <Button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"></path>
          </svg>
          <span>SAVE</span>
        </Button>
        <Button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M5 16v6H3V3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5zM5 5v9h8.236l1 2H19V7h-6.236l-1-2H5z"></path>
            </g>
          </svg>
        </Button>
      </ButtonWrapper>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  border-bottom: 2px solid rgba(90, 90, 90, 0.55);
`;

const VideoPlayer = styled.div`
  width: 1048px;
  height: 590px;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Tags = styled.div`
  display: flex;
  color: #09f;
  margin-top: 20px;
  font-size: 12px;
`;

const Tag = styled.p`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const Title = styled.div`
  word-break: break-word;
  font-size: 20px;
  font-weight: 600;
  margin: 12px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  padding-top: 0;
  cursor: pointer;
  span {
    font-weight: 600;
    margin-left: 0.5rem;
  }
  svg {
    /* color: white; */
  }
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
`;

export default MainVideo;
