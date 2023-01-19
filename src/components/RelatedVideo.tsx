import { useEffect, useState } from "react";
import RelatedCard from "./RelatedCard";
import styled from "styled-components";
import { relatedVideoDummyData } from "../data";
import type { IData } from "../types/relatedTypes"

type Props = { relatedData: IData };

function RelatedVideo({ relatedData }: Props) {
  return (
    <RelatedList>
      {relatedData?.map((item:any) => (
        <RelatedCard key={item.id.videoId} item={item} />
      ))}
    </RelatedList>
  );
}

const RelatedList = styled.div`
  max-width: 400px;
`;

export default RelatedVideo;
