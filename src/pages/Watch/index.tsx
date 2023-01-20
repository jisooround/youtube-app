import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getComments, getRelated, getVideoDetail } from "../../api/api";
import Comments from "../../components/watch/Comments";
import Description from "../../components/watch/Description";
import MainVideo from "../../components/watch/MainVideo";
import RelatedVideo from "../../components/watch/RelatedVideo";
import { commentsDummyData, videoDetailDummyData } from "../../data/data";
import type { IComment } from "../../types/commentsTypes";

import { VideoDetailData } from "../../types/videoDetailTypes";
import type { IData } from "../../types/relatedTypes";

interface WatchProps {
  open: boolean;
}

const Watch = ({ open }: WatchProps) => {
  // type assertion
  const { id } = useParams() as { id: string };
  const [videoDetailData, setVideoDetailData] =
    useState<VideoDetailData>(videoDetailDummyData);
  const [comments, setComments] = useState<IComment[]>(() => commentsDummyData);
  const [isError, setIsError] = useState("");
  const [relatedData, setRelatedData] = useState<IData>([]);

  useEffect(() => {
    axios
      .all([
        getVideoDetail(id, setVideoDetailData, setIsError),
        getComments(id, setComments, setIsError),
        getRelated(id, setRelatedData, setIsError),
      ])
      .catch((error) => setIsError(error.message));
  }, [id]);

  useEffect(() => {
    document.title = videoDetailData.items[0].snippet.title;
  });

  return isError !== "" && isError !== "Request failed with status code 403" ? (
    <WatchContainer open={open}>
      <ErrorPage>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="frown"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill="#1890ff"
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
          ></path>
          <path
            fill="#e6f7ff"
            d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 0 1-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 0 1-8 8.4zm24-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"
          ></path>
          <path
            fill="#1890ff"
            d="M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm224 112c-85.5 0-155.6 67.3-160 151.6a8 8 0 0 0 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4 3.7-49.5 45.3-88.6 95.8-88.6s92 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 0 0 8-8.4C667.6 600.3 597.5 533 512 533zm128-112a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"
          ></path>
        </svg>
        <span>{isError}</span>
      </ErrorPage>
    </WatchContainer>
  ) : (
    <WatchContainer open={open}>
      <WatchPageWrapper>
        <MainVideo videoDetailData={videoDetailData} />
        <Description channelId={videoDetailData.items[0].snippet.channelId} />
        <Comments comments={comments} />
      </WatchPageWrapper>
      <RelatedVideo relatedData={relatedData} />
    </WatchContainer>
  );
};

const WatchPageWrapper = styled.div`
  width: 1000px;
  min-width: 500px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const WatchContainer = styled.div<{ open: boolean }>`
  display: flex;
  gap: 40px;
  padding: 5rem 3.5rem;
  margin-left: ${(props) => (props.open ? "240" : "0")}px;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 50vh;
  font-size: 30px;
  font-weight: bolder;
  svg {
    width: 5rem;
    height: 5rem;
  }
`;

export default Watch;
