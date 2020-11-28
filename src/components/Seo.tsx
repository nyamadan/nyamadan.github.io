import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import normalizeUrl from "lib/normalize_url";

interface Props {
  title?: string;
  description?: string;
  keyword?: string;
  image?: string;
  url?: string;
}

export default function Seo({
  title,
  description,
  keyword,
  image,
  url,
}: Props): JSX.Element {
  const router = useRouter();
  const urlOrDefault =
    url ?? normalizeUrl(`${process.env.baseUrl}${router.asPath}`);
  const titleOrDefault = title ?? "nyamadan.github.io";
  const keywordOrDefault = keyword ?? "programmer,blog";
  const imageOrDefault = image ?? `${process.env.baseUrl}/images/ogp/ogp.png`;
  const descriptionOrDefault = description ?? "プログラマの日常など";

  return (
    <Head>
      <title key="title">{titleOrDefault}</title>
      <meta
        key="description"
        name="description"
        content={descriptionOrDefault}
      />
      <meta key="og:title" property="og:title" content={titleOrDefault} />
      <meta
        key="og:description"
        property="og:description"
        content={descriptionOrDefault}
      />
      <meta key="og:type" property="og:type" content="blog" />
      <meta key="og:url" property="og:url" content={urlOrDefault} />
      <meta key="og:image" property="og:image" content={imageOrDefault} />
      <meta
        key="og:site_name"
        property="og:site_name"
        content={titleOrDefault}
      />
      <meta key="keywords" name="keywords" content={keywordOrDefault} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content="@nyamadandan" />
      <meta key="twitter:url" name="twitter:url" content={imageOrDefault} />
      <meta key="twitter:title" name="twitter:title" content={titleOrDefault} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={descriptionOrDefault}
      />
      <meta key="twitter:image" name="twitter:image" content={imageOrDefault} />
      <link key="canonical" rel="canonical" href={urlOrDefault} />
    </Head>
  );
}
