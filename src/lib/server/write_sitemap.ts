import fs from "fs";
import { PostData } from "lib/post";
import { promisify } from "util";
import generateRss from "../rss";
import generateSitemap from "../sitemap";

export default async function writeSitemap(posts: readonly PostData[]) {
  const rss = generateRss(posts);
  const sitemap = generateSitemap(posts);

  return Promise.all([
    promisify(fs.writeFile)("./public/rss.xml", rss),
    promisify(fs.writeFile)("./public/sitemap.xml", sitemap),
  ]);
}
