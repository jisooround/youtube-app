import React, { useState, useEffect } from "react";
import { instance } from "../api/api";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function RelatedCard({ item }: any) {
  const navigate = useNavigate();
  const date: Date = new Date(item.snippet.publishTime);
  console.log(item)

  let now: any = new Date(); // 현재 날짜 및 시간
  const [videoView, setVideoView] = useState<any>('')
  const [videoTime, setVideoTime] = useState<any>('')

  function displayedAt(createdAt: any) {
    const milliSeconds = now - createdAt;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `recently`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}minutes ago`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}hours ago`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}days ago`; 
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}weeks ago`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}months ago`;
    const years = days / 365;
    return `${Math.floor(years)}years ago`;
  }

  function nFormatter(num:number) { //조회수 'k m'
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }

  const time = (input:string)=>{ // 영상길이 
    let reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    let hours = '', minutes = '', seconds = ''
    if (reptms.test(input)) {
      let matches:any = reptms.exec(input);
      if (matches[1]) hours = matches[1];
      if (matches[2]) minutes = matches[2];
      if (matches[3]) seconds = matches[3];
    }
    if (minutes.length === 1) minutes = `0${minutes}`
    if (seconds.length === 1) seconds = `0${seconds}`
    if (hours.length === 1) {
    hours = `${hours}`
    return `${hours}:${minutes}:${seconds}`
    }
    if(hours.length === 0)
      return `${minutes}:${seconds}`
    }

  // const getDetail = async (videoId=item.id.videoId) => {
  //   const res = await instance.get(
  //     `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`,
  //   );
  //   const view = nFormatter(res.data.items[0].statistics.viewCount)
  //   setVideoView(view)
  //   const vTime =time(res.data.items[0].contentDetails.duration)
  //   setVideoTime(vTime)
  // }




  const goToVideo = (videoId: string) => {
    navigate(`/watch/${videoId}`);
  };

  useEffect(()=>{
    // getDetail()
    setVideoView(nFormatter(100000))
    setVideoTime(time('PT1H15M15S'))

  },[])

  return (
    <VideoCard onClick={() => goToVideo(item.id.videoId)}>
      <PreviewBox>
        <Thumbnail src={item.snippet.thumbnails.medium.url} />
        <VideoTime>{videoTime}</VideoTime>
      </PreviewBox>
      <DetailBox>
        <RelatedTitle>{item.snippet.title}</RelatedTitle>
        <RelatedChannel>{item.snippet.channelTitle}</RelatedChannel>
        <InfoBox>
          <p>{videoView} views</p>
          <InfoDot> • </InfoDot>
          <p>{displayedAt(date)}</p>
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
  margin-bottom: 10px
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
  margin: 0 10px;
`

export default RelatedCard;
