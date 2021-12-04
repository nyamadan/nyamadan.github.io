import React, { ReactElement } from "react";
import Link from "next/link";
import { FaRss } from "react-icons/fa";

const MenuItem = function MenuItem({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <li
      className="
        mx-2
        list-none
      "
    >
      {children}
    </li>
  );
};

const Header = function Header(): ReactElement {
  return (
    <header
      className="
        flex
        justify-between
        flex-row
        items-center
        py-2
        px-4
        shadow-lg
      "
    >
      <h1
        className="
          flex
          flex-no-wrap
          flex-row
          items-center
          text-xl
        "
      >
        <Link href="/">
          <a
            className="
              font-bold
              mr-2
            "
          >
            nyamadan.github.io
          </a>
        </Link>

        <RssLink />
      </h1>

      <nav
        className="
          my-auto
          ml-auto
          mr-0
        "
      >
        <ul
          className="
            flex
            flex-row
            items-center
            p-0
            mx-auto
          "
        >
          <MenuItem>
            <Link href="/about">
              <a>About</a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="/">
              <a>Posts</a>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </header>
  );
};

const RssLink = function RssLink() {
  return (
    <Link href="/rss.xml">
      <a>
        <FaRss />
      </a>
    </Link>
  );
};

export default Header;
