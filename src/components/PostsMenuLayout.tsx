import React from "react";
import Link from "next/link";
import { ArchiveData, TagData } from "../lib/post";
import { toFormattedArchiveDate } from "../lib/date";
import Bio from "./Bio";
import TagLink from "./TagLink";
import { TwoColumns, TwoColumnsLeft, TwoColumnsRight } from "./Layout";

interface Props {
  archives: readonly ArchiveData[];
  tags: readonly TagData[];
  children?: React.ReactNode;
}

export default function PostsMenuLayout({ archives, tags, children }: Props) {
  return (
    <TwoColumns>
      <TwoColumnsLeft>{children}</TwoColumnsLeft>
      <TwoColumnsRight>
        <Heading>Author</Heading>
        <Bio />
        <Heading>Tags</Heading>
        <ul
          className="
            flex
            flex-row
            flex-wrap
          "
        >
          {tags.map(({ name, count }) => (
            <li key={name}>
              <TagLink tag={name} count={count} />
            </li>
          ))}
        </ul>

        <Heading>Archives</Heading>
        <ul>
          {archives.map(({ key, date, count }) => (
            <li key={key}>
              <Link href={`/posts/archives/${key}`}>
                <a>
                  {toFormattedArchiveDate(date)} ({count})
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </TwoColumnsRight>
    </TwoColumns>
  );
}

const Heading = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="font-bold text-lg mt-2 mb-1">{children}</h2>
);
