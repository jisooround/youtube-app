import { useParams } from "react-router-dom";
import styled from "styled-components";
import Comments from "../../components/Comments";
import Description from "../../components/Description";
import MainVideo from "../../components/MainVideo";
import RelatedVideo from "../../components/RelatedVideo";

interface WatchProps {
  open: boolean;
}

const Watch = ({ open }: WatchProps) => {
  // type assertion
  const { id } = useParams() as { id: string };

  return (
    <WatchContainer open={open}>
      <WatchPageWrapper>
        <MainVideo videoId={id} />
        <Description channelId="UCwQLh1dMRrT4WRjNKYzGHcw" />
        <Comments videoId={id} />
      </WatchPageWrapper>
      <RelatedVideo videoId={id} />
    </WatchContainer>
  );
};

const WatchPageWrapper = styled.div`
  max-width: 1000px;
  min-width: 500px;
  margin-right: 40px;
`;
const WatchContainer = styled.div<{ open: boolean }>`
  display: flex;
  padding: 5rem 3.5rem;
  margin-left: ${(props) => (props.open ? "240" : "0")}px;
  justify-content: center;
`;

export default Watch;
