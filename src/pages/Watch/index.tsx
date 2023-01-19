import { useParams } from "react-router-dom";
import styled from "styled-components";
import Comments from "../../components/Comments";
import Description from "../../components/Description";
import MainVideo from "../../components/MainVideo";
import RelatedVideo from "../../components/RelatedVideo";
const Watch = () => {
  // type assertion
  const { id } = useParams() as { id: string };

  return (
    <WatchContainer>
      <WatchPageWrapper>
        <MainVideo videoId={id} />
        <Description channelId="UCwQLh1dMRrT4WRjNKYzGHcw" />
        <Comments videoId={id} />
      </WatchPageWrapper>
      <RelatedVideo />
    </WatchContainer>
  );
};

const WatchPageWrapper = styled.div`
  max-width: 1000px;
  min-width: 500px;
  margin-right: 40px;
`;
const WatchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
`;

export default Watch;
