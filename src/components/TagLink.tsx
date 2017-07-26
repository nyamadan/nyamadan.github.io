import React from "react";
import SmallButtonLink from "./SmallButtonLink";

export default function TagLink({
  prefetch,
  tag,
  count,
  href,
}: {
  tag: string;
  count?: number;
  prefetch?: boolean;
  href?: string;
}) {
  return (
    <SmallButtonLink prefetch={prefetch} href={href ?? `/posts/tags/${tag}`}>
      {`${tag}${count != null ? ` (${count})` : ""}`}
    </SmallButtonLink>
  );
}
