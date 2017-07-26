import { PostData } from "./post";

const lang = "ja";
const blogTitle = "Blog - nyamadan.github.io";
const blogDescription = "プログラマの日常など";

const generateRssItem = ({
  slug,
  title,
  createdAt,
  description,
}: PostData): string => `
    <item>
      <guid>${encodeURI(`${process.env.baseUrl}/posts/${slug}`)}</guid>
      <title>${title}</title>
      <link>${encodeURI(`${process.env.baseUrl}/posts/${slug}`)}</link>
      <description>${description}</description>
      <pubDate>${new Date(createdAt).toUTCString()}</pubDate>
    </item>
`;

const generateRss = (posts: readonly PostData[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${blogTitle}</title>
      <link>${encodeURI(`${process.env.baseUrl}`)}</link>
      <description>${blogDescription}</description>
      <language>${lang}</language>
      <lastBuildDate>${new Date(
        posts[0].createdAt
      ).toUTCString()}</lastBuildDate>
      <atom:link href="${encodeURI(
        `${process.env.baseUrl}/rss.xml`
      )}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;

export default generateRss;
