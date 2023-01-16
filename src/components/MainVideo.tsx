import { instance } from "../api/api";
import React, { useEffect, useState } from "react";

type Props = {};

interface data {
  kind: string;
  etag: string;
  items: any;
  pageInfo: object;
}

const MainVideo = (props: Props) => {
  const initialData = {
    kind: "youtube#videoListResponse",
    etag: "UaVhWWfFRX6oOr9PuxvQGoIRITU",
    items: [
      {
        kind: "youtube#video",
        etag: "s43bWhmTNZVZVZZ0lWueAgD96s4",
        id: "ZDHCU-j3y4Y",
        snippet: {
          publishedAt: "2023-01-15T19:00:11Z",
          channelId: "UCwQLh1dMRrT4WRjNKYzGHcw",
          title: "The History Of Reworks That FAILED In League Of Legends",
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
          viewCount: "50299",
          likeCount: "2700",
          favoriteCount: "0",
          commentCount: "289",
        },
        player: {
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
  const [data, setData] = useState<data>(initialData);

  const getVideoData = async () => {
    try {
      const { data } = await instance.get(
        "/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=ZDHCU-j3y4Y",
      );
      setData(data);
      console.log(data);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  useEffect(() => {
    // getVideoData();
  }, []);

  return (
    <div>
      MainVideo
      <div
        dangerouslySetInnerHTML={{ __html: data?.items[0]?.player?.embedHtml }}
      ></div>
      <div># tags</div>
      <div>{data?.items[0]?.snippet?.title}</div>
      <div>
        {data?.items[0]?.statistics?.viewCount}{" "}
        {data?.items[0]?.snippet?.publishedAt}
      </div>
      <div>like, hate, share, save, flag</div>
    </div>
  );
};

export default MainVideo;
