import React from "react";
import TagLink from "../components/TagLink";
import SmallButtonLink from "../components/SmallButtonLink";

export default { title: "SmallButtonLink" };

export const normal = () => (
  <SmallButtonLink prefetch={false} href="return false">
    normal
  </SmallButtonLink>
);

export const tagLink = () => <TagLink prefetch={false} count={21} tag="tech" />;
