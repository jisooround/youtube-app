import styled from "styled-components";
import Comments from "../../components/Comments";
import Description from "../../components/Description";
import MainVideo from "../../components/MainVideo";

const Watch = () => {
  return (
   
    <WatchPageWrapper>
      <MainVideo />
      <Description channelId="UCwQLh1dMRrT4WRjNKYzGHcw" />
      <Comments videoId="" />
    </WatchPageWrapper>
  );
};

const WatchPageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Watch;
