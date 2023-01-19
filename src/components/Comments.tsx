import { useEffect, useState } from "react";
import styled from "styled-components";
import { getComments } from "../api/api";
import { commentsDummyData } from "../data";
import Comment from "./Comment";

export interface IComment {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    videoId: string;
    topLevelComment: {
      kind: string;
      etag: string;
      id: string;
      snippet: ISnippet;
    };
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
}

export interface ISnippet {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: {
    value: string;
  };
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

interface CommentsProp {
  videoId: string;
}

const Comments = ({ videoId }: CommentsProp) => {
  localStorage.setItem("comments", JSON.stringify(commentsDummyData));
  const localComments = JSON.parse(localStorage.getItem("comments") || "");
  const [comments, setComments] = useState<IComment[]>(
    () => localComments || commentsDummyData,
  );
  const [isError, setIsError] = useState<string>("");

  useEffect(() => {
    // getComments(videoId, setComments, setIsError);
    setComments(commentsDummyData);
  }, [videoId]);

  console.log(comments);

  const commentsData = comments.map(
    (comment) => comment.snippet.topLevelComment.snippet,
  );

  return (
    <CommentSection>
      <H4>댓글 {commentsData.length}개</H4>

      {
        <ul>
          {commentsData.map((comment) => (
            <Comment comment={comment} key={comment.textDisplay} />
          ))}
        </ul>
      }
    </CommentSection>
  );
};
export default Comments;

const CommentSection = styled.section`
  padding: 1.5rem;
`;

const H4 = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;
