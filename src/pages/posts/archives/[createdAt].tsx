import React from "react";
import getSlugs from "lib/server/slugs";
import {
  ArchiveData,
  getAllPostsData,
  getArchivesData,
  getPostData,
  TagData,
} from "../../../lib/post";
import Layout from "../../../components/Layout";
import PostsMenuLayout from "../../../components/PostsMenuLayout";
import Page from "../../../components/Page";
import { DateString, toFormattedArchiveDate } from "../../../lib/date";
import { PostHeadingSeparater } from "../../../components/Horizontal";
import { ContentHeading } from "../../../components/Heading";
import { assertIsDefined } from "../../../lib/asserts";
import PostThumbnail from "../../../components/PostThumbnail";

interface Props {
  date: DateString;
  posts: string[];
  tags: TagData[];
  archives: ArchiveData[];
}

export default function Tag({ tags, archives, date, posts }: Props) {
  const recentPosts = posts.map((x) => getPostData(x));
  return (
    <Page>
      <Layout>
        <PostsMenuLayout tags={tags} archives={archives}>
          <ContentHeading>{`${toFormattedArchiveDate(date)}`}</ContentHeading>
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

export function getStaticProps({
  params,
}: {
  params: { createdAt: string };
}): {
  props: Props;
} {
  const slugs = getSlugs();
  const { createdAt } = params;
  const { tags, archives } = getAllPostsData(slugs);
  const archiveData = archives.find((x) => x.key === createdAt);
  assertIsDefined(archiveData);
  const { date } = archiveData;
  const posts = archiveData.slugs;
  return {
    props: {
      posts,
      tags,
      archives,
      date,
    },
  };
}

export function getStaticPaths() {
  const slugs = getSlugs();
  const archives = getArchivesData(slugs);
  const paths = archives.map(({ key }) => `/posts/archives/${key}`);
  return { paths, fallback: false };
}
