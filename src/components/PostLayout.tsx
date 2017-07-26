import React from "react";
import { getPostData } from "../lib/post";
import Bio from "./Bio";
import { TwoColumns, TwoColumnsLeft, TwoColumnsRight } from "./Layout";
import OutlineComponent from "./Outline";

interface Props {
  slug: string;
  children?: React.ReactNode;
}

export default function PostLayout({ slug, children }: Props) {
  const { outline } = getPostData(slug);
  return (
    <TwoColumns>
      <TwoColumnsLeft>{children}</TwoColumnsLeft>
      <TwoColumnsRight>
        <Bio />
        <OutlineComponent outline={outline} />
      </TwoColumnsRight>
    </TwoColumns>
  );
}
