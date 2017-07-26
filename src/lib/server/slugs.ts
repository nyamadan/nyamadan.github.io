import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export default function getSlugs(): string[] {
  return fs.readdirSync(postsDirectory).flatMap((fileName) => {
    const ext = path.extname(fileName);
    if (!/\.mdx?$/.test(ext)) {
      return [];
    }

    return [path.basename(fileName, ext)];
  });
}
