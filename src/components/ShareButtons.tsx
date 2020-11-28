import { useRouter } from "next/router";
import React from "react";
import { SiHatenabookmark, SiTwitter } from "react-icons/si";
import normalizeUrl from "../lib/normalize_url";

interface Props {
  text?: string;
}

export default function ShareButtons({ text }: Props) {
  const router = useRouter();
  const url = normalizeUrl(`${process.env.baseUrl}${router.asPath}`);

  return (
    <ul className="flex flex-row text-lg space-x-2">
      <li>
        <a
          className="text-xl text-twitter hover:text-twitter"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?${Object.entries({
            text,
            url,
          })
            .flatMap(([key, value]) =>
              value ? [`${key}=${encodeURIComponent(value)}`] : []
            )
            .join("&")}`}
        >
          <SiTwitter />
        </a>
      </li>
      <li>
        <a
          className="text-xl text-hatena hover:text-hatena"
          href={`https://b.hatena.ne.jp/entry${
            process.env.protocol === "https" ? "/s/" : "/"
          }${process.env.host}${router.asPath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHatenabookmark />
        </a>
      </li>
    </ul>
  );
}
