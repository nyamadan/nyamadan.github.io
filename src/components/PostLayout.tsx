import React from "react";
import { getPostData } from "../lib/post";
import Bio from "./Bio";
import { TwoColumns, TwoColumnsLeft, TwoColumnsRight } from "./Layout";
import OutlineComponent from "./Outline";

interface Props {
  slug: string;
  children?: React.ReactNode;
}

const PostLayout = function PostLayout({ slug, children }: Props) {
  const { outline } = getPostData(slug);
  return (
    <TwoColumns>
      <TwoColumnsLeft>{children}</TwoColumnsLeft>
      <TwoColumnsRight>
        <Heading>Author</Heading>
        <Bio />
        <OutlineComponent outline={outline} />
      </TwoColumnsRight>
    </TwoColumns>
  );
};

const Heading = function Heading({ children }: { children?: React.ReactNode }) {
  return <h2 className="font-bold text-lg mt-2 mb-1">{children}</h2>;
};

export default PostLayout;
