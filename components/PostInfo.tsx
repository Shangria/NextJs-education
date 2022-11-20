import Heading from "./Heading";
import {postType} from "../types";
import {FC} from "react";

type PostInfoProps={
    post:postType;
}
const PostInfo:FC<PostInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
}

export default PostInfo;
