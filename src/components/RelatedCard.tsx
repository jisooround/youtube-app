import React, { useState, useEffect } from "react";
import { instance } from "../api/api";
import { useNavigate } from "react-router-dom";

function RelatedCard({ item }: any) {
  const navigate = useNavigate();
  console.log(item);
  const date: any = new Date(item.snippet.publishTime);
  let now: any = new Date(); // 현재 날짜 및 시간

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
  console.log();
  const goToVideo = async (item: any) => {
    const res = await instance.get(
      `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${item}`,
    );
    console.log(res);
    navigate(`/watch/${item}`);
  };

  return (
    <div onClick={() => goToVideo(item.id.videoId)}>
      <img src={item.snippet.thumbnails.default.url} />
      <p>{item.snippet.title}</p>
      <p>{item.snippet.channelTitle}</p>
      <p>{displayedAt(date)}</p>
    </div>
  );
}

export default RelatedCard;
