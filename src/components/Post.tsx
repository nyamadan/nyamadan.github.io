import React from "react";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { getPostComponent, getPostData } from "../lib/post";
import { toFormattedDate } from "../lib/date";
import s from "./Post.module.scss";
import TagLink from "./TagLink";

interface Props {
  slug: string;
}

export default function Post({ slug }: Props) {
  const Content = getPostComponent(slug);
  const { createdAt, tags, title } = getPostData(slug);

  return (
    <div className="mx-auto container max-w-xl">
      <Link href={`/posts/${slug}`}>
        <a>
          <h2 className="font-bold text-2xl text-center font-sans my-3">
            {title}
          </h2>
        </a>
      </Link>
      <div className="text-center my-3">
        {tags.map((tag) => (
          <TagLink key={tag} tag={tag} />
        ))}
      </div>
      <div
        className="
          flex
          flex-row
          items-center
          justify-center
          my-1
          text-xs
        "
      >
        <FaCalendar className="mr-1" />
        {toFormattedDate(createdAt)}
      </div>
      <hr className="border-gray-900 my-4 max-w-md mx-auto" />
      <div className={s.container}>
        <Content />
      </div>
    </div>
  );
}
