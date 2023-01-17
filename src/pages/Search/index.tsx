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
      console.log(response);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const items = JSON.parse(localStorage.getItem("item")).data.items;
  const videoDetail = JSON.parse(localStorage.getItem("video"));

  return (
    <>
      {result.map((data: any, i: any) => {
        return (
          <Section key={i}>
            <Card>
              <Video>
                <img
                  src={data.snippet.thumbnails.high.url}
                  alt="video"
                  style={{ width: "360px", height: "200px" }}
                />
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
                ></SearchDetail>
                <span> 2개월 전</span>
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
    </>
  );
};

const Section = styled.section`
  padding: 1.5rem 2rem;
  display: flex;
`;

const Card = styled.div`
  max-width: 1000px;
  height: 184px;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.2px;
`;

const Video = styled.div`
  max-width: 360px;
  height: 100%;
  position: relative;
  margin-right: 20px;
  img {
    border-radius: 10px;
  }
`;

const Info = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  width: 100%;
  padding-right: 1rem;
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

const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: rgb(96, 96, 96);
  padding: 12px 0;
  button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
  }
`;

const Descript = styled.div`
  color: rgb(96, 96, 96);
  font-size: 12px;
`;

export default Search;
