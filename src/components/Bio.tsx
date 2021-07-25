import React, { ReactElement } from "react";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import KeepAspectRatioImage from "./KeepAspectRatioImage";
import icon from "../images/icon.png"

export default function Bio({
  prefetch,
}: {
  prefetch?: boolean;
}): ReactElement {
  return (
    <div
      className="
        flex
        flex-row
        items-center
        max-w-xs
        border-gray-900
        border
        rounded-md
        shadow-md
        overflow-hidden
      "
    >
      <Link href="/about">
        <a>
          <div className="w-16 h-16 m-2 overflow-hidden rounded-full">
            <KeepAspectRatioImage
              src={icon}
              alt="nyamadan"
            />
          </div>
        </a>
      </Link>
      <div
        className="
          my-0
          border-l
          border-gray-900
          h-16
          m-2
        "
      />
      <ul
        className="
          flex
          flex-col
          justify-between
          p-2
        "
      >
        <li>
          <Link prefetch={prefetch} href="/about">
            <a className="font-bold leading-4">nyamadan</a>
          </Link>
        </li>
        <li className="font-sans">Webと3Dが好き</li>
        <li className="flex flex-row space-x-2 text-lg">
          <Link prefetch={prefetch} href="https://twitter.com/nyamadandan/">
            <a target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-twitter hover:text-twitter" />
            </a>
          </Link>
          <Link prefetch={prefetch} href="https://github.com/nyamadan/">
            <a target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
