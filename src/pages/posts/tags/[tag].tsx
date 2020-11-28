import React from "react";
import getSlugs from "lib/server/slugs";
import {
  ArchiveData,
  getAllPostsData,
  getTagsData,
  TagData,
} from "../../../lib/post";
import Layout from "../../../components/Layout";
import PostsMenuLayout from "../../../components/PostsMenuLayout";
import Page from "../../../components/Page";
import { ContentHeading } from "../../../components/Heading";
import { PostHeadingSeparater } from "../../../components/Horizontal";
import { assertIsDefined } from "../../../lib/asserts";
import PostsGrid from "../../../components/PostsGrid";

interface Props {
  tag: string;
  posts: string[];
  tags: TagData[];
  archives: ArchiveData[];
}

export default function Tag({ tag, posts, tags, archives }: Props) {
  return (
    <Page>
      <Layout>
        <PostsMenuLayout tags={tags} archives={archives}>
          <ContentHeading>{tag}</ContentHeading>
          <PostHeadingSeparater />
          <PostsGrid slugs={posts} />
        </PostsMenuLayout>
      </Layout>
    </Page>
  );
}

export function getStaticProps({
  params,
}: {
  params: { tag: string };
}): { props: Props } {
  const slugs = getSlugs();
  const { tag } = params;
  const { tags, archives } = getAllPostsData(slugs);
  const tagData = tags.find((x) => x.name === tag);
  assertIsDefined(tagData);
  const posts = tagData.slugs;
  return {
    props: {
      posts,
      tag,
      tags,
      archives,
    },
  };
}

export function getStaticPaths() {
  const slugs = getSlugs();
  const tags = getTagsData(slugs);
  const paths = tags.map(({ name }) => `/posts/tags/${name}`);
  return { paths, fallback: false };
}
