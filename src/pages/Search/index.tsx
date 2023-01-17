import { useEffect, useState } from "react";
import { instance } from "../../api/api";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchDetail from "../../components/SearchDetail";

const Search = () => {
  const [result, setResult] = useState<any>([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchWord = query.get("q");

  useEffect(() => {
    fetchData();
  }, [searchWord]);

  const fetchData = async () => {
    try {
      const response = await instance.get(
        `/search?part=snippet&maxResults=10&q=${searchWord}`,
      );
      setResult(response.data.items);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const items = JSON.parse(localStorage.getItem("item")).data.items;
  const videoDetail = JSON.parse(localStorage.getItem("video"));

  return (
    <main>
      {result.map((data: any, i: number) => {
        return (
          <Section key={i}>
            <Card>
              <Video>
                <img src={data.snippet.thumbnails.medium.url} alt="video" />
                <SearchDetail
                  videoId={data.id.videoId}
                  duration="duration"
                ></SearchDetail>
              </Video>
            </Card>
            <Info>
              <Title>{data.snippet.title}</Title>
              <Views>
                <SearchDetail
                  videoId={data.id.videoId}
                  views="views"
                ></SearchDetail>{" "}
                <SearchDetail
                  videoId={data.id.videoId}
                  time="time"
                ></SearchDetail>
              </Views>
              <Name>
                <button></button>
                <span>{data.snippet.channelTitle}</span>
              </Name>
              <Descript>{data.snippet.description}</Descript>
            </Info>
          </Section>
        );
      })}
    </main>
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

export default Search;
