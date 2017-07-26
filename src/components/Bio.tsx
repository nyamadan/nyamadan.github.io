import React, { ReactElement } from "react";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { profile64x64 } from "../images";

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
          <img
            className="w-16 h-16 m-2 rounded-full"
            src={profile64x64}
            alt="nyamadan"
          />
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
      <div
        className="
          flex
          flex-col
          justify-center
          p-2
        "
      >
        <div className="font-bold">
          <Link prefetch={prefetch} href="/about">
            <a>nyamadan</a>
          </Link>
        </div>
        <div className="font-sans">Webと3Dが好き</div>
        <div className="flex flex-row items-center text-black">
          <Link prefetch={prefetch} href="https://twitter.com/nyamadandan/">
            <a target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-4 mr-2" />
            </a>
          </Link>

          <Link prefetch={prefetch} href="https://github.com/nyamadan/">
            <a target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-4 mr-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
