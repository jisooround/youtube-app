import styled from "styled-components";
import MainVideo from "../../components/MainVideo";

const Watch = () => {
  return (
    <WatchPageWrapper>
      <MainVideo />
    </WatchPageWrapper>
  );
};

const WatchPageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export default Watch;
