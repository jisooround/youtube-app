import { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../api/api";

interface Desc {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    snippet: {
      title: string;
      description: string;
      customUrl: string;
      publishedAt: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      localized: {
        title: string;
        description: string;
      };
      country: string;
    };
    contentDetails: {
      relatedPlaylists: {
        likes: string;
        uploads: string;
      };
    };
    statistics: {
      viewCount: string;
      subscriberCount: string;
      hiddenSubscriberCount: boolean;
      videoCount: string;
    };
  }>;
}

const dummyData = {
  kind: "youtube#channelListResponse",
  etag: "ajF4r6clnUEyVb9aBeacaRfXn5w",
  pageInfo: { totalResults: 1, resultsPerPage: 5 },
  items: [
    {
      kind: "youtube#channel",
      etag: "lahV7vkMgJ4f4Hw9t8XXIBGrzps",
      id: "UCwQLh1dMRrT4WRjNKYzGHcw",
      snippet: {
        title: "Vars",
        description:
          '“You take 20 minutes to explain what should only take 2."\n\nWelcome to my main channel! Here you can find discussions, analysis and video essays on League of Legends. My second channel has the same but for Genshin Impact and my third channel features Super Smash Bros. Utlimate.\n\n(As of 04/13/2022) Currently making videos/content on:\n- League of Legends - This channel!\n- Genshin Impact - https://www.youtube.com/varsii\n- Super Smash Bros. Ultimate - https://www.youtube.com/varsiii\n',
        customUrl: "@varsverum",
        publishedAt: "2018-01-26T02:28:53Z",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/HwXPP35OjkzHI6_BSUe0XvtrM7zg5mb__A1a_xl4oiehjIZyVTusYkyl9jWv8eByy7Yw7QbR=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
            height: 88,
          },
          medium: {
            url: "https://yt3.ggpht.com/HwXPP35OjkzHI6_BSUe0XvtrM7zg5mb__A1a_xl4oiehjIZyVTusYkyl9jWv8eByy7Yw7QbR=s240-c-k-c0x00ffffff-no-rj",
            width: 240,
            height: 240,
          },
          high: {
            url: "https://yt3.ggpht.com/HwXPP35OjkzHI6_BSUe0XvtrM7zg5mb__A1a_xl4oiehjIZyVTusYkyl9jWv8eByy7Yw7QbR=s800-c-k-c0x00ffffff-no-rj",
            width: 800,
            height: 800,
          },
        },
        localized: {
          title: "Vars",
          description:
            '“You take 20 minutes to explain what should only take 2."\n\nWelcome to my main channel! Here you can find discussions, analysis and video essays on League of Legends. My second channel has the same but for Genshin Impact and my third channel features Super Smash Bros. Utlimate.\n\n(As of 04/13/2022) Currently making videos/content on:\n- League of Legends - This channel!\n- Genshin Impact - https://www.youtube.com/varsii\n- Super Smash Bros. Ultimate - https://www.youtube.com/varsiii\n',
        },
        country: "US",
      },
      contentDetails: {
        relatedPlaylists: { likes: "", uploads: "UUwQLh1dMRrT4WRjNKYzGHcw" },
      },
      statistics: {
        viewCount: "54584880",
        subscriberCount: "176000",
        hiddenSubscriberCount: false,
        videoCount: "622",
      },
    },
  ],
};

const Description = ({ channelId }: { channelId: string }) => {
  localStorage.setItem("desc", JSON.stringify(dummyData));
  const localDesc = JSON.parse(localStorage.getItem("desc") || "");

  const [description, setDescription] = useState<Desc>(()=> localDesc || dummyData);

  const getDescription = async () => {
    const res = await instance(
      `/channels?part=snippet&part=statistics&part=contentDetails&id=${channelId}`,
    );

    if (res.status === 200) {
      localStorage.setItem("desc", JSON.stringify(res.data));
      setDescription(res.data);
    }
  };

  useEffect(() => {
    // getDescription();
  }, []);

  const desc = description.items.map((item) => item);

  return (
    <DescContainer>
      {desc.map((item) => (
        <>
          <ProfileWrapper>
            <img src={item.snippet.thumbnails.default.url} alt="avatar" />
          </ProfileWrapper>
          <DescWrapper>
            <div>
              <h4>{item.snippet.title}</h4>
              <Follower>{item.statistics.subscriberCount}</Follower>
            </div>
            <Desc>{item.snippet.description}</Desc>
          </DescWrapper>
        </>
      ))}
    </DescContainer>
  );
};
export default Description;

const DescContainer = styled.section`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid gray;
  padding: 1.5rem;
`;

export const ProfileWrapper = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-weight: 600;
    line-height: 1.4;
  }
`;

const Follower = styled.p`
  font-size: 0.875rem;
  color: gray;
  margin-top: 0.25rem;
`;

const Desc = styled.p`
  /* overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
`;
