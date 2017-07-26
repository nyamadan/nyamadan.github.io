import React from "react";
import getSlugs from "lib/server/slugs";
import {
  ArchiveData,
  getAllPostsData,
  getPostData,
  getTagsData,
  TagData,
} from "../../../lib/post";
import Layout from "../../../components/Layout";
import PostsMenuLayout from "../../../components/PostsMenuLayout";
import Page from "../../../components/Page";
import { ContentHeading } from "../../../components/Heading";
import { PostHeadingSeparater } from "../../../components/Horizontal";
import { assertIsDefined } from "../../../lib/asserts";
import PostThumbnail from "../../../components/PostThumbnail";

interface Props {
  tag: string;
  posts: string[];
  tags: TagData[];
  archives: ArchiveData[];
}

export default function Tag({ tag, posts, tags, archives }: Props) {
  const postsData = posts.map((slug) => getPostData(slug));

  return (
    <Page>
      <Layout>
        <PostsMenuLayout tags={tags} archives={archives}>
          <ContentHeading>{tag}</ContentHeading>
          <PostHeadingSeparater />
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
            {postsData.map((post) => (
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
