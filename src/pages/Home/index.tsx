import { instance } from "../../api/index";
import { useEffect } from "react";
import styled from "styled-components";
import MainCard from "../../components/home/MainCard";
import { mainVideoDummyData } from "../../data/data";
import { VideoSearchData } from "../../types/videoSearchTypes";

const Home = ({ open }: { open: boolean }) => {
  useEffect(() => {
    document.title = "YouTube";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          "/search?part=snippet&maxResults=10&q={파스타}",
        );
        localStorage.setItem(
          "mainVideoSearchData",
          JSON.stringify(response.data),
        );
      } catch (e) {
        console.log((e as Error).message);
      }
    };
    // fetchData();
  }, []);

  // dummyData 로컬에 저장
  localStorage.setItem(
    "mainVideoDummyData",
    JSON.stringify(mainVideoDummyData),
  );

  // dummyData 로컬에서 가져오기
  const localData = JSON.parse(
    localStorage.getItem("mainVideoDummyData") || "",
  );

  return (
    <Container open={open}>
      {localData.items.map((item: VideoSearchData, i: number) => {
        return <MainCard key={item.id.videoId} item={item} i={i} />;
      })}
    </Container>
  );
};

const Container = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "calc(100% - 240)" : "calc(100% - 72)")}px;
  height: auto;
  padding: 100px 33px 0 33px;
  margin-left: ${(props) => (props.open ? "240" : "72")}px;
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
