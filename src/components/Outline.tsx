import React from "react";
import { Outline as OutlineType } from "../lib/post";

interface Props {
  outline: OutlineType;
}

const Outline = function Outline({ outline }: Props) {
  return (
    <ul
      className="
      sticky
      top-0
      py-4
      "
    >
      {outline.map(({ level, text, id }) => (
        <li key={id}>
          <a
            className="
              block
              rounded-md
              hover:bg-gray-300
              hover:text-gray-900
              transition-colors
              duration-300
              font-sans
              p-1
            "
            href={`#${id}`}
          >
            <span
              className={
                /* eslint-disable no-nested-ternary */
                level === 1
                  ? "text-lg"
                  : level === 2
                  ? "text-base"
                  : level === 3
                  ? "text-sm"
                  : "text-xs"
                /* eslint-enable no-nested-ternary */
              }
            >
              {text}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Outline;
