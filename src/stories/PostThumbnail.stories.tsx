import React from "react";
import PostThumbnail from "../components/PostThumbnail";
import { toDateString } from "../lib/date";

export default { title: "PostThumbnail" };

export const normal = () => (
  <PostThumbnail
    post={{
      createdAt: toDateString(Date.now()),
      description: "とてもグッドな説明",
      outline: [{ id: "heading1", level: 2, text: "heading1" }],
      slug: "good",
      tags: ["tech"],
      title: "とてもグッドなタイトル！！！！！！！！！！！！！！！！！！！！",
    }}
    prefetch={false}
  />
);
