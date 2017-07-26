import { assertIsArrayOfString, assertIsString } from "./asserts";
import {
  assertIsValidDateConfig,
  DateString,
  toDateKey,
  toDateString,
} from "./date";

interface Heading {
  id: string;
  level: number;
  text: string;
}

export type Outline = Heading[];

export interface Summary {
  description: string;
  outline: Outline;
}

export interface PostData {
  slug: string;
  title: string;
  description: string;
  createdAt: DateString;
  tags: string[];
  outline: Heading[];
}

interface PostMdx {
  createdAt?: unknown;
  title?: unknown;
  tags?: unknown;
  description?: unknown;
  summary: Summary;
  default: React.ComponentType;
}

export interface TagData {
  name: string;
  slugs: string[];
  count: number;
}

export interface ArchiveData {
  key: string;
  date: DateString;
  slugs: string[];
  count: number;
}

export type TaggedPosts = { [K in string]: PostData[] } & {
  __taggedPosts: never;
};

export type ArchivedPosts = {
  [K in string]: { posts: PostData[]; date: DateString };
};

export function getPostComponent(slug: string): React.ComponentType {
  const {
    default: Component,
    // eslint-disable-next-line max-len
    // eslint-disable-next-line import/no-dynamic-require,global-require,@typescript-eslint/no-var-requires
  } = require(`../posts/${slug}.mdx`) as PostMdx;

  return Component;
}

export function getPostData(slug: string): PostData {
  const {
    createdAt,
    title,
    tags,
    description,
    summary,
    // eslint-disable-next-line max-len
    // eslint-disable-next-line import/no-dynamic-require,global-require,@typescript-eslint/no-var-requires
  } = require(`../posts/${slug}.mdx`) as PostMdx;
  assertIsString(title);
  assertIsArrayOfString(tags);
  assertIsValidDateConfig(createdAt);

  return {
    tags: tags.map((x) => x.toLowerCase()),
    slug,
    title,
    outline: summary.outline,
    description:
      typeof description === "string" ? description : summary.description,
    createdAt: toDateString(createdAt),
  };
}

export function getSortedPostsData(slugs: readonly string[]): PostData[] {
  return slugs
    .map((slug) => getPostData(slug))
    .sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return -1;
    });
}

function getTaggedPostsData(
  postsOrSlugs: readonly PostData[] | readonly string[]
): TaggedPosts {
  const posts =
    typeof postsOrSlugs[0] === "string"
      ? getSortedPostsData(postsOrSlugs as readonly string[])
      : (postsOrSlugs as readonly PostData[]);

  const tags = {} as TaggedPosts;
  for (const post of posts) {
    for (const tag of post.tags) {
      if (!tags[tag]) {
        tags[tag] = [post];
      } else {
        tags[tag].push(post);
      }
    }
  }

  return tags;
}

export function getTagsData(
  slugsOrTaggedPosts: TaggedPosts | readonly string[]
): TagData[] {
  const taggedPosts = Array.isArray(slugsOrTaggedPosts)
    ? getTaggedPostsData(slugsOrTaggedPosts as readonly string[])
    : (slugsOrTaggedPosts as TaggedPosts);
  return Object.keys(taggedPosts).map((tag) => ({
    name: tag,
    slugs: taggedPosts[tag].map((x) => x.slug),
    count: taggedPosts[tag].length,
  }));
}

function getArchivesPostsData(
  postsOrSlugs: readonly PostData[] | readonly string[]
): ArchivedPosts {
  const posts =
    typeof postsOrSlugs[0] === "string"
      ? getSortedPostsData(postsOrSlugs as readonly string[])
      : (postsOrSlugs as readonly PostData[]);
  const archivedPosts = {} as ArchivedPosts;
  for (const post of posts) {
    const date = toDateString(post.createdAt);
    const key = toDateKey(date);
    if (!archivedPosts[key]) {
      archivedPosts[key] = {
        date,
        posts: [post],
      };
    } else {
      archivedPosts[key].posts.push(post);
    }
  }

  return archivedPosts;
}

export function getArchivesData(
  archivePostsOrSlugs: ArchivedPosts | readonly string[]
): ArchiveData[] {
  const archivePosts = Array.isArray(archivePostsOrSlugs)
    ? getArchivesPostsData(archivePostsOrSlugs as readonly string[])
    : (archivePostsOrSlugs as ArchivedPosts);
  return Object.keys(archivePosts).map((key) => {
    const date = toDateString(key);
    assertIsValidDateConfig(date);
    return {
      key,
      date,
      slugs: archivePosts[key].posts.map((x) => x.slug),
      count: archivePosts[key].posts.length,
    };
  });
}

export function getAllPostsData(slugs: string[]) {
  const posts = getSortedPostsData(slugs);
  const recents = posts.slice(0, 10).map((x) => x.slug);
  const taggedPosts = getTaggedPostsData(posts);
  const tags = getTagsData(taggedPosts);
  const archivedPosts = getArchivesPostsData(posts);
  const archives = getArchivesData(archivedPosts);

  return {
    posts,
    recents,
    tags,
    archives,
  };
}
