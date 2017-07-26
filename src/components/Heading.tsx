import React from "react";

export const SiteHeading = ({ children }: { children?: React.ReactNode }) => (
  <h1 className="font-bold text-xl">{children}</h1>
);

export const ContentHeading = ({
  children,
}: {
  children?: React.ReactNode;
}) => <h2 className="font-bold text-xl text-center">{children}</h2>;
