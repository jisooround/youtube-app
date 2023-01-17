import styled from "styled-components";
import Comments from "../../components/Comments";
import Description from "../../components/Description";
import MainVideo from "../../components/MainVideo";
import RelatedVideo from "../../components/RelatedVideo";
const Watch = () => {
  return (
    <WatchContainer>
      <WatchPageWrapper>
        <MainVideo />
        <Description />
        <Comments id="" />
      </WatchPageWrapper>
      <RelatedVideo />
    </WatchContainer>
  );
};

const WatchPageWrapper = styled.div`
  max-width: 1200px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const WatchContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1400px;
`;

export default Watch;
