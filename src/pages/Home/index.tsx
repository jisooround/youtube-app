import { instance } from "../../api/api";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";

export interface VideoData {
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

//메인 목록을 위한 dummy data
const dummyData = {
  kind: "youtube#searchListResponse",
  etag: "1vazrGuAkgvVhNTMfwBwL6L5G5s",
  nextPageToken: "CAoQAA",
  regionCode: "KR",
  pageInfo: { totalResults: 1000000, resultsPerPage: 10 },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "CB1mrld2syx_iB7Dgqx0i5AfRx0",
      id: { kind: "youtube#video", videoId: "zNRtUP5jeZo" },
      snippet: {
        publishedAt: "2022-10-03T09:00:33Z",
        channelId: "UC8CIM3d3zDYMk-3T5aAz0yw",
        title: "혜안 모여봐요 동물의숲 처음 해봅니다",
        description:
          "너구리를 조심해 [업로드] 금,토,일,월 [문의메일] zxcv34276@gmail.com [인스타그램] @hxxax_ #혜안 #동물의숲.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/zNRtUP5jeZo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/zNRtUP5jeZo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/zNRtUP5jeZo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "혜안",
        liveBroadcastContent: "none",
        publishTime: "2022-10-03T09:00:33Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "BisZK1qKkk5O-xAIlm10gM-LREs",
      id: { kind: "youtube#video", videoId: "Mwe-AyQ1ry8" },
      snippet: {
        publishedAt: "2020-04-15T09:00:17Z",
        channelId: "UCKC4R6B8bTLIKH1V9PyD7Iw",
        title: "대물만 낚이는 미쳐버린 섬 ㄷㄷ [모여봐요 동물의숲 5화]",
        description:
          "모동숲 #섬 #낚시 ◇ 트위치 생방송 https://www.twitch.tv/kimbangduck ◇ 문의 혹은 하고 싶은 말 kbd2018@naver.com ◇ 팬카페 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Mwe-AyQ1ry8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Mwe-AyQ1ry8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Mwe-AyQ1ry8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "견뭉",
        liveBroadcastContent: "none",
        publishTime: "2020-04-15T09:00:17Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "kZ25pdSu8WghQ0FxDSPuN5HcTtY",
      id: { kind: "youtube#video", videoId: "Cxkmd8YLo3w" },
      snippet: {
        publishedAt: "2019-02-26T03:00:00Z",
        channelId: "UCAoiU1E2k9At3sIXSKRPwqA",
        title:
          "자면서 / 작업할때 듣기 좋은 놀러오세요 동물의 숲 노래 모음 AM 1~PM 12",
        description:
          "한줄 코멘트: 사실상 내가 사용할려고 만든 노래 모음 ___ 제 채널을 구독해주세요!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Cxkmd8YLo3w/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Cxkmd8YLo3w/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Cxkmd8YLo3w/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "병1278기",
        liveBroadcastContent: "none",
        publishTime: "2019-02-26T03:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "YUZpItfrX5etq3uo8tUK0a2WAX4",
      id: { kind: "youtube#video", videoId: "f-BwAGRBsek" },
      snippet: {
        publishedAt: "2020-03-20T10:00:38Z",
        channelId: "UCEZdB9TjmDqIuHSMPwo6blw",
        title: "모여봐요 동물의숲 초보탈출 필수영상 13가지 꿀팁! 제 1탄",
        description:
          "모여봐요 동물의숲 초보탈출 필수영상 13가지 꿀팁! 제 1탄 보닌 동물의 숲 커뮤니티 카페 https://cafe.naver.com/bluegraysgdkb 24 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/f-BwAGRBsek/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/f-BwAGRBsek/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/f-BwAGRBsek/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "보닌",
        liveBroadcastContent: "none",
        publishTime: "2020-03-20T10:00:38Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "p7tW9XGhczu_9kLATEZ1CPSdoH8",
      id: { kind: "youtube#video", videoId: "SYq8msTK-7M" },
      snippet: {
        publishedAt: "2023-01-14T10:01:00Z",
        channelId: "UCHbT1KmTlkocMT0z5VB4bUg",
        title: "방은 이렇게 꾸몄습니다.",
        description:
          "정신없어 보이지만, 다 질서가 있어요. ^^ #아오니 #방소개 ‍인스타그램 : aonioni_ ‍팬카페 : https://cafe.naver.com/aonioni [BGM ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/SYq8msTK-7M/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/SYq8msTK-7M/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/SYq8msTK-7M/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "아오니 AONI",
        liveBroadcastContent: "none",
        publishTime: "2023-01-14T10:01:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FU7MjR_kEyQpKFhcnM69Xmlawb4",
      id: { kind: "youtube#video", videoId: "Raz4sN5p-DE" },
      snippet: {
        publishedAt: "2022-11-17T09:00:14Z",
        channelId: "UC8CIM3d3zDYMk-3T5aAz0yw",
        title: "구독자의 섬에 직접 다녀왔습니다 [동물의숲 자랑대회]",
        description:
          "동숲 자랑대회 [업로드] 금,토,일,월 [문의메일] zxcv34276@gmail.com [인스타그램] @hxxax_ #혜안 #콘테스트 #동물의숲 Music ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Raz4sN5p-DE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Raz4sN5p-DE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Raz4sN5p-DE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "혜안",
        liveBroadcastContent: "none",
        publishTime: "2022-11-17T09:00:14Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "UWW6286d7nCqRXqYAHkzBnWF_Tk",
      id: { kind: "youtube#video", videoId: "A06uzuHP0Po" },
      snippet: {
        publishedAt: "2022-12-23T09:00:05Z",
        channelId: "UC8CIM3d3zDYMk-3T5aAz0yw",
        title: "(2편)성인용 동물의숲 다시 들어갔습니닼ㅋㅋㅋㅋㅋㅋㅋ",
        description:
          "1달만에 컴백 [업로드] 금,토,일,월 [문의메일] zxcv34276@gmail.com [인스타그램] @hxxax_ #혜안 #롱빈터 #동물의숲 Music ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/A06uzuHP0Po/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/A06uzuHP0Po/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/A06uzuHP0Po/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "혜안",
        liveBroadcastContent: "none",
        publishTime: "2022-12-23T09:00:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "SxKnGWu0G-5jvhjUVHsA7Vw9m5M",
      id: { kind: "youtube#video", videoId: "j0rgNHDam78" },
      snippet: {
        publishedAt: "2022-10-22T03:00:31Z",
        channelId: "UC8CIM3d3zDYMk-3T5aAz0yw",
        title: "동물의숲 1500시간 고인물 섬에 초대 받았습니다",
        description:
          "느껴봐요 빈부격차 [업로드] 금,토,일,월 [문의메일] zxcv34276@gmail.com [인스타그램] @hxxax_ #혜안 #동물의숲.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/j0rgNHDam78/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/j0rgNHDam78/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/j0rgNHDam78/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "혜안",
        liveBroadcastContent: "none",
        publishTime: "2022-10-22T03:00:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "tsgYtB9_19kDPccHMZXllfnvU3E",
      id: { kind: "youtube#video", videoId: "4VfyL_z7SRw" },
      snippet: {
        publishedAt: "2022-10-15T03:43:01Z",
        channelId: "UC8CIM3d3zDYMk-3T5aAz0yw",
        title: "혜안 동물의숲 이제 개 잘합니다ㅋㅋㅋㅋㅋㅋ",
        description:
          "갚아봐요 대출의 숲 [업로드] 금,토,일,월 [문의메일] zxcv34276@gmail.com [인스타그램] @hxxax_ #혜안 #동물의숲.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/4VfyL_z7SRw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/4VfyL_z7SRw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/4VfyL_z7SRw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "혜안",
        liveBroadcastContent: "none",
        publishTime: "2022-10-15T03:43:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "kYSKGcrjZ2cxtCCEFqwrl0LYGw8",
      id: { kind: "youtube#video", videoId: "b4fRwityGsM" },
      snippet: {
        publishedAt: "2023-01-08T17:15:21Z",
        channelId: "UCsJX5VqzOzAAKbgmGTSNNdg",
        title: "주민들 부끄럽게 만드는 법 📷 (모동숲)",
        description: "모동숲 #shorts #모동숲TMI.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/b4fRwityGsM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/b4fRwityGsM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/b4fRwityGsM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "샐리의 모동숲 Sallycrossing",
        liveBroadcastContent: "none",
        publishTime: "2023-01-08T17:15:21Z",
      },
    },
  ],
};

const Home = () => {
  const [fold, setFold] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          "/search?part=snippet&maxResults=10&q={동물의숲}",
        );
        const MovieData = response.data;
        localStorage.setItem("동물의숲", JSON.stringify(response.data));
      } catch (e) {
        console.log((e as Error).message);
      }
    };
    //  fetchData();
  }, []);

  // dummyData 로컬에 저장
  localStorage.setItem("동물의숲", JSON.stringify(dummyData));

  // dummyData 로컬에서 가져오기
  const localData = JSON.parse(localStorage.getItem("동물의숲") || "");

  return (
    <Container>
      {localData.items.map((item: VideoData) => {
        return <Card item={item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 72px);
  height: auto;
  padding: 20px 33px 0 33px;
  margin-left: 72px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  @media (max-width: 1450px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  @media (max-width: 1120px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

export default Home;
