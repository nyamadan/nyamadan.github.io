import React from "react";
import Link from "next/link";
import { toFormattedDate } from "../lib/date";
import { PostData } from "../lib/post";
import s from "./PostThumbnail.module.scss";

interface Props {
  post: PostData;
  prefetch?: boolean;
}

const PostThumbnail = function PostThumbnail({ prefetch, post }: Props) {
  const { title, description, createdAt, tags, slug } = post;
  return (
    <Link prefetch={prefetch} href={`/posts/${slug}`}>
      <a className={s.thumbnail}>
        <span
          className="
            text-center
            font-bold
            truncate
            block
            font-sans
          "
        >
          {title}
        </span>
        <span
          className="
              block
              text-center
              truncate
            "
        >
          {tags.map((x) => `[${x}]`).join(" ")}
        </span>
        <span
          className="
            block
            text-center
            text-xs
          "
        >
          {toFormattedDate(createdAt)}
        </span>
        <hr
          className="
              border-gray-900
              m-1
            "
        />
        <span className="block font-sans">{description}</span>
      </a>
    </Link>
  );
};

export default PostThumbnail;
