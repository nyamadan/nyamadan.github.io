import React from "react";
import { getPostData } from "../lib/post";
import PostThumbnail from "./PostThumbnail";

interface Props {
  slugs: readonly string[];
}

export default function PostsGrid({ slugs }: Props) {
  const posts = slugs.map((x) => getPostData(x));
  return (
    <div
      className="
            container
            grid
            gap-4
            grid-flow-row
            grid-cols-1
            sm:grid-cols-2
            "
    >
      {posts.map((post) => (
        <div key={post.slug}>
          <PostThumbnail post={post} />
        </div>
      ))}
    </div>
  );
}
