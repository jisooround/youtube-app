import { instance } from "../../api/api";
import React, { useEffect, useState } from "react"
import styled from "styled-components";
import Card from "../../components/Card";

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

const Home = () => {
  const [fold, setFold] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await instance.get(
          "/search?part=snippet&maxResults=10&q={동물의숲}",
        )
        const MovieData = response.data;
        // console.log(MovieData);
        localStorage.setItem("동물의숲",JSON.stringify(response.data));
      } catch (e) {
        console.log((e as Error).message);
      }
    }
  //  fetchData();
  }, [])

 const localData = JSON.parse(localStorage.getItem("동물의숲") || "");

    return (
      <Container>
        {
          localData.items.map((item: any) => {
              return <Card item={item} />
          })
        }
      </Container>
      );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 72px);
  height: auto;
  padding: 20px 33px 0 33px;
  margin-left: 72px;
  box-sizing: border-box;
`

const Unfold = styled.div`
  display: flex;
  width: calc(100% - 240px);
  height: 100vh;
  background-color: beige;
  margin-left: 240px
`

export default Home;
