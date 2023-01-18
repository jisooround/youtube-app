import React, { useState, useEffect } from "react";
import { instance } from "../api/api";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { displayedAt } from "../utils/displayedAt";
import { nFormatter } from "../utils/nFormatter";
import { videoTime } from "../utils/videoTime";

function RelatedCard({ item }: any) {
  console.log(item)

  const navigate = useNavigate();
  const date: number = new Date(item.snippet.publishTime).getTime();
  let now:number = new Date().getTime(); // 현재 날짜 및 시간
  console.log(now)

  const [videoView, setVideoView] = useState<any>('')
  const [time, setTime] = useState<any>('')

  // const getDetail = async (videoId=item.id.videoId) => {
  //   const res = await instance.get(
  //     `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`,
  //   );
  //   const view = nFormatter(res.data.items[0].statistics.viewCount)
  //   setVideoView(view)
  //   const vTime =videoTime(res.data.items[0].contentDetails.duration)
  //   setVideoTime(vTime)
  // }

  const goToVideo = (videoId: string) => {
    navigate(`/watch/${videoId}`);
  };

  useEffect(()=>{
    // getDetail()
    setVideoView(nFormatter(100000))
    setTime(videoTime('PT1H15M15S'))

  },[])

  return (
    <VideoCard onClick={() => goToVideo(item.id.videoId)}>
      <PreviewBox>
        <Thumbnail src={item.snippet.thumbnails.medium.url} />
        <VideoTime>{time}</VideoTime>
      </PreviewBox>
      <DetailBox>
        <RelatedTitle>{item.snippet.title}</RelatedTitle>
        <RelatedChannel>{item.snippet.channelTitle}</RelatedChannel>
        <InfoBox>
          <p>{videoView} views</p>
          <InfoDot> • </InfoDot>
          <p>{displayedAt(now,date)}</p>
        </InfoBox>
      </DetailBox>
    </VideoCard>
  );
}


const PreviewBox = styled.div`
  position: relative;
  width: 160px;
  height: 90px;
  overflow: hidden;
`
const VideoTime = styled.span`
  position: absolute;
  background-color: #000000c0;
  color: #fff;
  padding: 4px;
  right: 5px; bottom: 5px;
  font-size: 12px;
  border-radius: 3px;
`

const Thumbnail =  styled.img`
  width: 100%;
`
const VideoCard = styled.div`
  width: 100%;
  display: flex;
  height: 90px;
  margin-bottom: 10px;
`
const RelatedTitle = styled.h3`
  width: 100%;
  font-size: 14px;
  color: #000;
  text-overflow: ellipsis;
  font-weight: 500;
  overflow: hidden;
  word-break: break-word;
  line-height: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const RelatedChannel = styled.p`
  font-size: 12px;
  color: #666;
  font-weight: 500;
`
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 160px);
  padding-left: 12px;
`

const InfoBox = styled.div`
  display: flex;
  font-size: 12px;
  color: #666;
  font-weight: 600;
`
const InfoDot = styled.span`
  margin: 0 3px;
`

export default RelatedCard;
