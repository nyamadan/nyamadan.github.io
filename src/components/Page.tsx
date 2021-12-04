import React, { ReactNode } from "react";
import Seo from "./Seo";

interface Props {
  children?: ReactNode;
}

const Page = function Page({ children }: Props) {
  return (
    <>
      <Seo />
      {children}
    </>
  );
};

export default Page;
