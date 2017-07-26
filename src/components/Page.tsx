import React, { ReactNode } from "react";
import Seo from "./Seo";

interface Props {
  children?: ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <>
      <Seo />
      {children}
    </>
  );
}
