import React, { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children?: ReactNode;
}

export const TwoColumns = function TwoColumns({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        flex-row
        container
        max-w-5xl
        mx-auto
      "
    >
      {children}
    </div>
  );
};

export const TwoColumnsLeft = function TwoColumnsLeft({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className="
      container
      p-4
    "
    >
      {children}
    </div>
  );
};

export const TwoColumnsRight = function TwoColumnsRight({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
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
};

const Layout = function Layout({ children }: Props) {
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
          py-4
          text-center
        "
      >
        powered by next.js
        <br />© 2020 nyamadan
      </footer>
    </div>
  );
};

export default Layout;
