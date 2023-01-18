import { useState, useEffect } from "react";
import styled from "styled-components";
import { instance } from "../api/api";
import { timeAgo } from "../utils/timeAgo";

const SearchCard = ({ data }: any) => {
  const [videoResult, setVideoResult] = useState<any>("");
  useEffect(() => {
    videoData();
  }, []);

  const videoData = async () => {
    const response = await instance.get(
      `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${data.id.videoId}`,
    );
    setVideoResult(response.data.items[0]);
  };

  return (
    <>
      {videoResult ? (
        <Section>
          <Card>
            <Video>
              <img src={data.snippet.thumbnails.medium.url} alt="video" />
              <Duration>
                <span>{videoResult.contentDetails.duration}</span>
              </Duration>
            </Video>
          </Card>
          <Info>
            <Title>{data.snippet.title}</Title>
            <Views>
              <span>조회수 {videoResult.statistics.viewCount}</span>{" "}
              <span>{timeAgo(videoResult.snippet.publishedAt)}</span>
            </Views>
            <Name>
              <button></button>
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
  img {
    border-radius: 10px;
    height: 100%;
  }
`;

const Duration = styled.div`
  padding: 3px 4px;
  background-color: red;
  position: absolute;
  bottom: -15px;
  right: 60px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  line-height: 150%;
  font-size: 18px;
`;

const Views = styled.div`
  font-size: 12px;
  color: rgb(96, 96, 96);
`;

const Name = styled(Views)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
  }
`;

const Descript = styled(Views)``;

export default SearchCard;
