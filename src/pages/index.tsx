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
import PostsGrid from "../components/PostsGrid";

interface Props {
  recents: readonly string[];
  tags: readonly TagData[];
  archives: readonly ArchiveData[];
}

export default function Posts({ recents, tags, archives }: Props) {
  return (
    <Page>
      <Layout>
        <PostsMenuLayout tags={tags} archives={archives}>
          <PostsGrid slugs={recents} />
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
