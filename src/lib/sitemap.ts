import { PostData } from "./post";

const generateSitemapItem = (post: PostData): string => `
  <url>
    <loc>${encodeURI(`${process.env.baseUrl}/posts/${post.slug}`)}</loc>
    <lastmod>${new Date(post.createdAt).toUTCString()}</lastmod>
    <changefreq>never</changefreq>
  </url>
`;

const generateSitemap = (posts: readonly PostData[]): string => `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${encodeURI(`${process.env.baseUrl}`)}</loc>
      <changefreq>monthly</changefreq>
    </url>
    <url>
      <loc>${encodeURI(`${process.env.baseUrl}`)}</loc>
      <lastmod>${new Date(posts[0].createdAt).toUTCString()}</lastmod>
      <changefreq>weekly</changefreq>
    </url>
    ${posts.map(generateSitemapItem).join("")}
  </urlset>
`;

export default generateSitemap;
