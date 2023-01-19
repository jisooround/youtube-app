import { useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../api/api";
import Comment from "./Comment";

export interface IComment {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    videoId: string;
    topLevelComment: {
      kind: string;
      etag: string;
      id: string;
      snippet: ISnippet;
    };
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
}

export interface ISnippet {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: {
    value: string;
  };
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

interface CommentsProp {
  videoId: string;
}

const dummyData = [
  {
    kind: "youtube#commentThread",
    etag: "ZGp5YeVjs4LcHrWGtbwiZNgq2tY",
    id: "UgyKSucEINu_lC1i0Xl4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "fmG2fTsh6hgtCeMboP4Out87NYc",
        id: "UgyKSucEINu_lC1i0Xl4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "정준하 욕심 겁나많아보인다",
          textOriginal: "정준하 욕심 겁나많아보인다",
          authorDisplayName: "젊은청년",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu8btLRG6NCYsNRue13AJDp-o9wtWoSgAm1fTg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCBVpEXdBNFKQe8uiC6gPUaA",
          authorChannelId: {
            value: "UCBVpEXdBNFKQe8uiC6gPUaA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1,
          publishedAt: "2023-01-13T06:54:00Z",
          updatedAt: "2023-01-13T06:54:00Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "fhmC2Nq2s9rJwHP8GY1gL43Dpks",
    id: "UgxzDnqWMfRL7WHF5Ot4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "W86U2npC_YOpFJ5qAW6DPeAPGBg",
        id: "UgxzDnqWMfRL7WHF5Ot4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            "진짜...이광수 전에 노홍철이 있었다<br>진짜 광기다......",
          textOriginal: "진짜...이광수 전에 노홍철이 있었다\n진짜 광기다......",
          authorDisplayName: "윤재현",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu_D1oFvD2EDAxkxuKiUm1AP4QjHv7WW4wwfNpSd=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCMvxFyM0KogrC3B6LpBImTg",
          authorChannelId: {
            value: "UCMvxFyM0KogrC3B6LpBImTg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-01-10T12:38:50Z",
          updatedAt: "2023-01-10T12:38:50Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "RUGId9pTGetUQFENjXVLdc0Sq90",
    id: "Ugx8smEPSDT9zaqEqmR4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "r5wvQA-BZpP1zhV1v1xIeGUPfcA",
        id: "Ugx8smEPSDT9zaqEqmR4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            '<a href="https://www.youtube.com/watch?v=T95sMUMyb3o&amp;t=7m40s">7:40</a> 조력자라고 하지않고 신인 개그맨 이름 한번더 언급해주는 유재석',
          textOriginal:
            "7:40 조력자라고 하지않고 신인 개그맨 이름 한번더 언급해주는 유재석",
          authorDisplayName: "코쿤",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu8HcCEOLh9E6_lL--632Na6xKWdi02USFC9oIVp=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCuc--dlCwj1GYamWqdZlJOA",
          authorChannelId: {
            value: "UCuc--dlCwj1GYamWqdZlJOA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1,
          publishedAt: "2023-01-09T05:30:02Z",
          updatedAt: "2023-01-09T05:30:02Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "qDX4i5D2ISR1ArcpmI1x7pjxXHE",
    id: "UgyIhfzhY0Z1boPEyxB4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "t8hizTyaRp5oMYwnla8h0BVLDwg",
        id: "UgyIhfzhY0Z1boPEyxB4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            "술래잡기가 완성도, 결과 면에서는 여드름 브레이크, 돈가방보다 좋았다고 생각한다. 특히나 후반부가 진짜 쫄깃하고 재밌었음",
          textOriginal:
            "술래잡기가 완성도, 결과 면에서는 여드름 브레이크, 돈가방보다 좋았다고 생각한다. 특히나 후반부가 진짜 쫄깃하고 재밌었음",
          authorDisplayName: "J J",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu-Z0n2aGfI191mqgKgktUjrg6kqT1Hwt0B1Yw=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCco0kb3kOPcq5PQ2yrQwqlg",
          authorChannelId: {
            value: "UCco0kb3kOPcq5PQ2yrQwqlg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-01-08T09:25:23Z",
          updatedAt: "2023-01-08T09:25:23Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "u6IpscIrVfsrb0CvA321-aXRP2A",
    id: "UgzOBNj0B6-J3eZ3n714AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "zlalgNHvUkI7Gv9XCYDKdJDGx6k",
        id: "UgzOBNj0B6-J3eZ3n714AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "형돈이는 어디간거징",
          textOriginal: "형돈이는 어디간거징",
          authorDisplayName: "잭과콩나물공장",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/Mtq_4v3eXh3ei-Dr60KKx0-scI50reN2wOR7a0mI4wbV83a-aQN0ld3g39ZZCyXlDyQ1Z9vMHg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCJhrhTTYIVn-OKyXyilbebQ",
          authorChannelId: {
            value: "UCJhrhTTYIVn-OKyXyilbebQ",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-01-05T04:39:21Z",
          updatedAt: "2023-01-05T04:39:21Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "I2hytVoktWbJNwq8QMF0KTidpa8",
    id: "UgziY2Ei7C2kHXc5iG14AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "VzqGUrZdjom_Yw3ODtPc93CKDK8",
        id: "UgziY2Ei7C2kHXc5iG14AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "뾰요오옹",
          textOriginal: "뾰요오옹",
          authorDisplayName: "유빈이",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu92oTckcvmM4ukkAoMssmqAhiijpM-HPrDPvfyHfHwkrw=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCCcsCOLw0JQXgy4jgXuY3Rw",
          authorChannelId: {
            value: "UCCcsCOLw0JQXgy4jgXuY3Rw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-01-02T13:03:29Z",
          updatedAt: "2023-01-02T13:03:29Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "9tjCHtYRbnMrR0NsavsaZMRqhD4",
    id: "Ugypb_eRVJD1ugZPyqt4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "KmZJu185NqCurO26aWQnTdfmxbk",
        id: "Ugypb_eRVJD1ugZPyqt4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "박명수 그래도 문 안 잠그고 방송 위해서 적당히 타협..",
          textOriginal: "박명수 그래도 문 안 잠그고 방송 위해서 적당히 타협..",
          authorDisplayName: "고영규",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu9pA0DL3LNZn_X5xmgj756v-eKSsSzehwLvbqBukg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCAwuu16r-pGHBr9nMiwtWXg",
          authorChannelId: {
            value: "UCAwuu16r-pGHBr9nMiwtWXg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-01-01T11:03:47Z",
          updatedAt: "2023-01-01T11:03:47Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "Eqt6nPSTJ-MzBZhx3Td5CN-tLs8",
    id: "UgxOCRIm4z37brVvzdp4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "by5dlZUW5Vfq7J5uEcNF4tn5URw",
        id: "UgxOCRIm4z37brVvzdp4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "무한도전만의 이런 추격전 다시 느끼고싶다..",
          textOriginal: "무한도전만의 이런 추격전 다시 느끼고싶다..",
          authorDisplayName: "이나 김",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu8nA8pULegKUS9ur9pmAlTeiFLytp3HbrOlzoB0D2KLGg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCKoPWpRMvf5gr4sbA2OPkww",
          authorChannelId: {
            value: "UCKoPWpRMvf5gr4sbA2OPkww",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2022-12-31T12:05:42Z",
          updatedAt: "2022-12-31T12:05:42Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "_ZuUl3ATUPQoBI_Es3HToaKSo3o",
    id: "UgzzYNiuu4qWZIOKOUZ4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "7gEMm5T1THQAC60zN9ME2SZqLc4",
        id: "UgzzYNiuu4qWZIOKOUZ4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "진정한 광기ㅋㅋㅋ",
          textOriginal: "진정한 광기ㅋㅋㅋ",
          authorDisplayName: "노약자석터줏대감",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/sYJWrhnrU7i8W9wmeIv5zQJ8rlzTHtzUyxtta7la1-H3itmnZuj3SPdFr0GO71h6pQyEQlgUaw=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCdJdPvz-1m3_xQcbSnKIzKw",
          authorChannelId: {
            value: "UCdJdPvz-1m3_xQcbSnKIzKw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2022-12-31T02:57:53Z",
          updatedAt: "2022-12-31T02:57:53Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "fYdh41L_2J3q_6eXJ6m1jEHS2Cg",
    id: "UgzGWjUe9nNTf_9TOC94AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "nknZAiTQ3HBIhGi3bIjtgUCfwR4",
        id: "UgzGWjUe9nNTf_9TOC94AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            '<a href="https://www.youtube.com/watch?v=T95sMUMyb3o&amp;t=15m35s">15:35</a> 장손이 아니에요ㅋㅋㅋ 돌아잌ㅋㅋㅋ',
          textOriginal: "15:35 장손이 아니에요ㅋㅋㅋ 돌아잌ㅋㅋㅋ",
          authorDisplayName: "룬",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu9TLDEYaJ6gV8sv8XYKhGdjco3j2t38cCNRR9k4oA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC5e40lG8mBNvvB6Cj5dozig",
          authorChannelId: {
            value: "UC5e40lG8mBNvvB6Cj5dozig",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2022-12-30T09:44:29Z",
          updatedAt: "2022-12-30T09:44:29Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "eVNRoA2PyQrT_SImYmYvGF-Lgk8",
    id: "UgxYG6u-4V54jbwgmnl4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "2yQEdEldlt1t_hEPlzFosuRb-iI",
        id: "UgxYG6u-4V54jbwgmnl4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            '<a href="https://www.youtube.com/watch?v=T95sMUMyb3o&amp;t=15m33s">15:33</a> &quot;저는 여한이 없어요 처자식도 없어요&quot; <br>&quot;부모님이 계시잖아&quot;<br>&quot;장손이 아니예요&quot;<br>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
          textOriginal:
            '15:33 "저는 여한이 없어요 처자식도 없어요" \n"부모님이 계시잖아"\n"장손이 아니예요"\nㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
          authorDisplayName: "김이름",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu8wFHh5gtqTtW-d6ugJX5892JmTCOLN_IRQkmVi=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCg3tKiygYu62uN7LPZgGOhA",
          authorChannelId: {
            value: "UCg3tKiygYu62uN7LPZgGOhA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2022-12-25T03:09:35Z",
          updatedAt: "2022-12-25T03:09:35Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "4U2AGGcf8Zfg-DjPtOcNQA9t3_U",
    id: "UgyGnngduQ5c1D4cYtN4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "_ct2wYyiq3QDbG-j31iw3NFWYnM",
        id: "UgyGnngduQ5c1D4cYtN4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            "박명수 2분 남기고 하하핳 거리면서 오토바이 타는거 개귀엽ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬",
          textOriginal:
            "박명수 2분 남기고 하하핳 거리면서 오토바이 타는거 개귀엽ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬ㅋ⫬",
          authorDisplayName: "알명수",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/j0py5aAO7UItcsI_LY5cf9nLeF6Y56eqRUOT3HaestiPZLHYHkd35nPnTfohTIlAhttPQaLs-Q=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCJzpcUYXpKE66DO0jYdsTTA",
          authorChannelId: {
            value: "UCJzpcUYXpKE66DO0jYdsTTA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2022-12-22T05:50:27Z",
          updatedAt: "2022-12-22T05:50:27Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "JoUKKUWvLpBorx-YMNFvPPg-Fas",
    id: "UgwCP1vI-CoieKeP1oB4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "YpRU6TeF3W7JP9T9af8cMtwKe-Y",
        id: "UgwCP1vI-CoieKeP1oB4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            '<a href="https://www.youtube.com/watch?v=T95sMUMyb3o&amp;t=15m40s">15:40</a> 어? 박명수씨네<br>제발 형한테 형이라고좀 해<br>유재석한테는 틈만 나면 너는 형한테 어쩌구저쩌구 말하면서 너는 왜 안하는데??  <br>쉼표편에서 나온것처럼 장점많은사람인거 아는데 단점하나가 진짜 조오오오오온나 큼',
          textOriginal:
            "15:40 어? 박명수씨네\n제발 형한테 형이라고좀 해\n유재석한테는 틈만 나면 너는 형한테 어쩌구저쩌구 말하면서 너는 왜 안하는데??  \n쉼표편에서 나온것처럼 장점많은사람인거 아는데 단점하나가 진짜 조오오오오온나 큼",
          authorDisplayName: "ABCABC",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/DNyLdVU0Rn6wkeyBCi9NkDvC89HWonThBSGjbotgcBL9qke0MtyZdMzClfEIy4-nQiWWSqgAyg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCghYiFI_PWYxAByNe95P_rg",
          authorChannelId: {
            value: "UCghYiFI_PWYxAByNe95P_rg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1,
          publishedAt: "2022-12-21T13:03:00Z",
          updatedAt: "2022-12-21T13:03:00Z",
        },
      },
      canReply: true,
      totalReplyCount: 2,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "pIDFU7t-hFosX8C7rhHpI6ML9iw",
    id: "Ugx6k_cR0oxntxX-X6p4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "XcyjKSh6oxBPJkPAL0W9TlyRe-o",
        id: "Ugx6k_cR0oxntxX-X6p4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            "지금 생각해보니까 저 찬물 위에 17분 동안 있었단 거네 ㄷ ㄷ",
          textOriginal:
            "지금 생각해보니까 저 찬물 위에 17분 동안 있었단 거네 ㄷ ㄷ",
          authorDisplayName: "Si -hun",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu8PNG5qvLDn1w-0hvR5qCfhkYNYqXvZ-uuGhRyolg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCKYckvI8xQ8ylisj2S9wQPw",
          authorChannelId: {
            value: "UCKYckvI8xQ8ylisj2S9wQPw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 22,
          publishedAt: "2022-12-20T19:59:15Z",
          updatedAt: "2022-12-20T19:59:15Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "YZbI8_RL7dnTv8kAINMtm00KKTQ",
    id: "Ugx_2Yu0YVVw9w6jiud4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "T2P05MP4iQb_9qPTzuZ8lhiVUSE",
        id: "Ugx_2Yu0YVVw9w6jiud4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            '<a href="https://www.youtube.com/watch?v=T95sMUMyb3o&amp;t=7m48s">7:48</a> 진짜 광기 레전드 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
          textOriginal:
            "7:48 진짜 광기 레전드 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
          authorDisplayName: "서울사는사람",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/z-02RdNMu1US4L4nbViZuFcuzYUBpTb8oZeCHQZWAk2CKMT7faNDKRANmRfutlmBu0vPSsXJ=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCqckkltVGybgk0hlVBU2BDg",
          authorChannelId: {
            value: "UCqckkltVGybgk0hlVBU2BDg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 15,
          publishedAt: "2022-12-16T16:53:38Z",
          updatedAt: "2022-12-16T16:53:38Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "ZMY6YXkBNKyj5fk1COAiOFoaSps",
    id: "Ugxq3XCpmwW9ew_birF4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "mwPAD0gxGy5-HFAkOG_o4Ce9NHQ",
        id: "Ugxq3XCpmwW9ew_birF4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "정준하는 진짜 게임을 재미없게하는구나 그렇구나",
          textOriginal: "정준하는 진짜 게임을 재미없게하는구나 그렇구나",
          authorDisplayName: "손동준",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu--mcxnKJoI59uE8u8UdsA_gMX6njiDYq-Ev9NPu2Wf3g=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC4hASrxu6oYpbkvjrcsQcZA",
          authorChannelId: {
            value: "UC4hASrxu6oYpbkvjrcsQcZA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2022-12-15T13:33:37Z",
          updatedAt: "2022-12-15T13:33:37Z",
        },
      },
      canReply: true,
      totalReplyCount: 1,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "48oWKoG1jf2-bfATc5IRvh-cyn4",
    id: "UgzSAO2uOfK0ihxQTeN4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "QYwGvSanUTEZrv2tA8Ze2wX006I",
        id: "UgzSAO2uOfK0ihxQTeN4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay:
            "역시 유재석이다<br>물속에서 노홍철 잡을 수 있었는데 분량 재미 그런거 생각해서 일부러 바로 안잡았네",
          textOriginal:
            "역시 유재석이다\n물속에서 노홍철 잡을 수 있었는데 분량 재미 그런거 생각해서 일부러 바로 안잡았네",
          authorDisplayName: "박상기",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu-x6tGyn6JYSqdZtPUpweiOzFqJm-KIqB238g=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCAXYo02l2KANRPW41ysVRfw",
          authorChannelId: {
            value: "UCAXYo02l2KANRPW41ysVRfw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 40,
          publishedAt: "2022-12-13T06:05:46Z",
          updatedAt: "2022-12-13T06:05:46Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "Kc2f-c2CslI_sr4E71nXlljiOu4",
    id: "Ugw3rvPT887A48FhzoV4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "jdg9qvskbN8HgqXWulHVbxWALd4",
        id: "Ugw3rvPT887A48FhzoV4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "50cc는 면허 필요없음?",
          textOriginal: "50cc는 면허 필요없음?",
          authorDisplayName: "박태훈",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu_XTwLFAzvLNZiOxCx2Z677fk-fu75mwBNzzoY4Eu7EbA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCiAaxZpT39uHlI4GrIe5R5Q",
          authorChannelId: {
            value: "UCiAaxZpT39uHlI4GrIe5R5Q",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2022-12-07T18:54:52Z",
          updatedAt: "2022-12-07T18:54:52Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "IiHb78HTCa-YJ_Ivd-gVB8Sw4jI",
    id: "UgxYppMPrQO4DQ87cwN4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "Lh4ooUsCW27jKUKpyF1mCRDwOFY",
        id: "UgxYppMPrQO4DQ87cwN4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "이런게 진짜 버라이어티지 ㅋㅋㅋㅋ",
          textOriginal: "이런게 진짜 버라이어티지 ㅋㅋㅋㅋ",
          authorDisplayName: "아뉘",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu9N4rsR_ExInUp2Vcs_-2GYnBlUd_l5hVcpBR9Lgw=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC0EWH6wY6uu3pBxHIwSvS_A",
          authorChannelId: {
            value: "UC0EWH6wY6uu3pBxHIwSvS_A",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 3,
          publishedAt: "2022-12-01T14:14:35Z",
          updatedAt: "2022-12-01T14:14:35Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "dSRFMNi4Ke8g8M53kr_YoatIJSE",
    id: "UgydNL-Jg6X7CewnMMt4AaABAg",
    snippet: {
      videoId: "T95sMUMyb3o",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "MmLYg3D9QKpoidIhzngSb3U-WLE",
        id: "UgydNL-Jg6X7CewnMMt4AaABAg",
        snippet: {
          videoId: "T95sMUMyb3o",
          textDisplay: "아이고미치겠네 이거 죽겠네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
          textOriginal: "아이고미치겠네 이거 죽겠네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
          authorDisplayName: "윤재앙오세이돈",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AMLnZu_YUSUSZtx8sTDP-5TAJmW9lcA_QML1RH2UsOIHIA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCxt-rA4QVTCUgchiFtgwV_w",
          authorChannelId: {
            value: "UCxt-rA4QVTCUgchiFtgwV_w",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2022-11-21T07:28:11Z",
          updatedAt: "2022-11-21T07:28:11Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
];

const Comments = ({ videoId }: CommentsProp) => {
  localStorage.setItem("comments", JSON.stringify(dummyData));
  const localComments = JSON.parse(localStorage.getItem("comments") || "");
  const [comments, setComments] = useState<IComment[]>(
    () => localComments || dummyData,
  );
  const [isError, setIsError] = useState<string>("");

  useEffect(() => {
    // getComments(videoId, setComments, setIsError);
    setComments(dummyData);
  }, []);

  const commentsData = comments.map(
    (comment) => comment.snippet.topLevelComment.snippet,
  );

  return (
    <CommentSection>
      <H4>댓글 {commentsData.length}개</H4>

      {
        <ul>
          {commentsData.map((comment) => (
            <Comment comment={comment} />
          ))}
        </ul>
      }
    </CommentSection>
  );
};
export default Comments;

const CommentSection = styled.section`
  padding: 1.5rem;
`;

const H4 = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;
