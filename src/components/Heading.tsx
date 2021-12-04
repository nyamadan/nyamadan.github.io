import React from "react";

export const SiteHeading = function SiteHeading({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <h1 className="font-bold text-xl">{children}</h1>;
};

export const ContentHeading = function ContentHeading({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <h2 className="font-bold text-xl text-center">{children}</h2>;
};
