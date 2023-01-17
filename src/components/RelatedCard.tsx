import React, { useState, useEffect } from "react";
import { instance } from "../api/api";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function RelatedCard({ item }: any) {
  const navigate = useNavigate();
  const date: any = new Date(item.snippet.publishTime);
  let now: any = new Date(); // 현재 날짜 및 시간
  const [videoView, setVideoView] = useState<any>('')
  const [videoTime, setVideoTime] = useState<any>('')
  function displayedAt(createdAt: any) {
    const milliSeconds = now - createdAt;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`; 
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }

  function nFormatter(num:number) {
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

  const time = (input:string)=>{
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


  const getDetail = async (videoId=item.id.videoId) => {
    const res = await instance.get(
      `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`,
    );
    const view = nFormatter(res.data.items[0].statistics.viewCount)
    setVideoView(view)
    const vTime =time(res.data.items[0].contentDetails.duration)
    setVideoTime(vTime)
  }

  const goToVideo = (videoId: any) => {
    navigate(`/watch/${videoId}`);
  };

  useEffect(()=>{
    getDetail()
  },[])

  return (
    <div onClick={() => goToVideo(item.id.videoId)}>
      <div className="preview">
        <img src={item.snippet.thumbnails.default.url} />
      </div>
      <p>{item.snippet.title}</p>
      <p>{item.snippet.channelTitle}</p>
      <p>{displayedAt(date)}</p>
      <p>{videoView}</p>
      <p>{videoTime}</p>
    </div>
  );
}
// let Img = styled.img`
//   padding
// `
export default RelatedCard;
