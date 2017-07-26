import React, { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children?: ReactNode;
}

export const TwoColumns = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
        flex
        flex-row
        relative
      "
  >
    {children}
  </div>
);

export const TwoColumnsLeft = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <div
    className="
      w-full
      p-4
    "
  >
    {children}
  </div>
);

export const TwoColumnsRight = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <div
    className="
      container
      max-w-xs
      p-4
      overflow-hidden
      relative
      hidden
      md:block
    "
  >
    {children}
  </div>
);

export default function Layout({ children }: Props) {
  return (
    <div
      className="
        flex
        flex-col
        min-h-screen
        overflow-x-hidden
      "
    >
      <Header />

      {children}

      <footer
        className="
          mt-auto
          mb-0
          text-center
        "
      >
        <hr />
        powered by next.js
        <br />© 2020 nyamadan
      </footer>
    </div>
  );
}
