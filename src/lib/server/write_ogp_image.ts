import path from "path";
import sharp from "sharp";
import { getPostData } from "../post";

const postsOgpDirectory = path.join(
  process.cwd(),
  "public",
  "images",
  "ogp",
  "posts"
);

export default async function writeOgpImage(slug: string) {
  const { title } = getPostData(slug);
  await sharp(
    Buffer.from(
      `
<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
  <style>
    text {
      font-family: "Noto Sans CJK JP", "Noto Sans JP", sans-serif;;
    }
  </style>
  <rect
    x="0" y="0"
    width="1200"
    height="600"
    fill="#ffffff"
  />

  <text
    x="50%" y="260"
    font-size="64"
    text-anchor="middle"
    fill="#000000"
  >
    - nyamadan.github.io -
  </text>

  <text
    x="50%" y="340"
    font-size="64"
    font-weight="bold"
    text-anchor="middle"
    fill="#000000"
  >
    ${title}
  </text>
</svg>
      `
    )
  )
    .png()
    .toFile(path.join(postsOgpDirectory, `${slug}.png`));
}
