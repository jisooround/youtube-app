import { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../api";
import { getDescription } from "../api/api";
import { descriptionDummyData } from "../data";
import { nFormatter } from "../utils/nFormatter";

interface Description {
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

const Description = ({ channelId }: { channelId: string }) => {
  localStorage.setItem("desc", JSON.stringify(descriptionDummyData));
  const localDesc = JSON.parse(localStorage.getItem("desc") || "");
  const [isError, setIsError] = useState<string>("");

  const [description, setDescription] = useState<Description>(
    () => localDesc || descriptionDummyData,
  );

  useEffect(() => {
    // getDescription(channelId, setDescription, setIsError);
  }, [channelId]);

  const desc = description.items.map((item) => item);

  return (
    <DescContainer>
      <div>
        <ProfileWrapper>
          <Profile>
            <img src={desc[0].snippet.thumbnails.default.url} alt="avatar" />
          </Profile>
          <div>
            <h4>{desc[0].snippet.title}</h4>
            <Follower>
              구독자 {nFormatter(Number(desc[0].statistics.subscriberCount))}
            </Follower>
          </div>
        </ProfileWrapper>
        <DescWrapper>
          <Desc>{desc[0].snippet.description}</Desc>
        </DescWrapper>
      </div>
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

const ProfileWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Profile = styled.div`
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.4;
`;
