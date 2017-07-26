import React from "react";

import getSlugs from "lib/server/slugs";
import writeSitemap from "lib/server/write_sitemap";
import {
  TagData,
  ArchiveData,
  getAllPostsData,
  getPostData,
} from "../lib/post";
import Layout from "../components/Layout";
import PostsMenuLayout from "../components/PostsMenuLayout";
import Page from "../components/Page";
import PostThumbnail from "../components/PostThumbnail";

interface Props {
  recents: readonly string[];
  tags: readonly TagData[];
  archives: readonly ArchiveData[];
}

export default function Posts({ recents, tags, archives }: Props) {
  const recentPosts = recents.map((x) => getPostData(x));

  return (
    <Page>
      <Layout>
        <PostsMenuLayout tags={tags} archives={archives}>
          <div
            className="
            container
            max-w-4xl
            mx-auto
            grid
            gap-4
            grid-flow-row
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            "
          >
            {recentPosts.map((post) => (
              <div key={post.slug}>
                <PostThumbnail post={post} />
              </div>
            ))}
          </div>
        </PostsMenuLayout>
      </Layout>
    </Page>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const slugs = getSlugs();
  const { posts, recents, tags, archives } = getAllPostsData(slugs);

  await writeSitemap(posts);

  return {
    props: {
      recents,
      tags,
      archives,
    },
  };
}
