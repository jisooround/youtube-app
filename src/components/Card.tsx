import React, { useEffect } from 'react'
import styled from 'styled-components'
import { instance } from "../api/api";
import { timeAgo } from '../utils/timeAgo';

export interface MovieData {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: Item[]
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface Item {
  kind: string
  etag: string
  id: Id
  snippet: Snippet
}

export interface Id {
  kind: string
  videoId: string
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export interface Thumbnails {
  default: Default
  medium: Medium
  high: High
}

export interface Default {
  url: string
  width: number
  height: number
}

export interface Medium {
  url: string
  width: number
  height: number
}

export interface High {
  url: string
  width: number
  height: number
}

const Card = ({ item }) => {
  const videoId = item.id.videoId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get(
          `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`,
        )
        localStorage.setItem(`${videoId}`, JSON.stringify(data));
      } catch (e) {
        console.log((e as Error).message);
      }
    }
  //  fetchData();
  }, [])

  const localDetailData = JSON.parse(localStorage.getItem(`${videoId}`) || "");
  console.log(localDetailData);

  return (
    <Wrap>
          <MainImage><img src={item.snippet.thumbnails.medium.url} alt="Channel-thumbnails" /></MainImage>
          <Info>
            <Image><img src={item.snippet.thumbnails.medium.url} alt="" /></Image>
            <Text>
              <Title>
              {item.snippet.title}
              </Title>
              <ChannelTitle>
              {item.snippet.channelTitle}
              </ChannelTitle>
              <Detail>
                <ViewCount>조회수 {localDetailData.items[0].statistics.viewCount}</ViewCount>
                <Time>&nbsp; &middot; {timeAgo(localDetailData.items[0].snippet.publishedAt)} </Time>
              </Detail>
            </Text>
          </Info>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
`
const MainImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  border-radius: 15px;
  img{
    border-radius: 15px;
  }
`
const Info = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-content: flex-start;
`
const Text = styled.div`
  width: 75%;
  line-height: 1.2rem;
  font-weight: 500;
  margin-top: 12px;
`
const Title = styled.p`
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 6px;
`
const ChannelTitle = styled.div`
  font-size: 0.8em;
  color: #606060;
  height: auto;
`
const Image = styled.div`
  width: 36px;
  height: 36px;
  background-color: skyblue;
  margin: 12px 12px 0 0;
  border-radius: 100px;
  overflow: hidden;
  img {
    height: 36px;
  }
`
const Detail = styled.div`
 display: flex;
`
const ViewCount = styled(ChannelTitle)`
`
const Time = styled(ChannelTitle)`
`

export default Card