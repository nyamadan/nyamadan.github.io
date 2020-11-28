import React from "react";
import getSlugs from "lib/server/slugs";
import {
  ArchiveData,
  getAllPostsData,
  getArchivesData,
  TagData,
} from "../../../lib/post";
import Layout from "../../../components/Layout";
import PostsMenuLayout from "../../../components/PostsMenuLayout";
import Page from "../../../components/Page";
import { DateString, toFormattedArchiveDate } from "../../../lib/date";
import { PostHeadingSeparater } from "../../../components/Horizontal";
import { ContentHeading } from "../../../components/Heading";
import { assertIsDefined } from "../../../lib/asserts";
import PostsGrid from "../../../components/PostsGrid";

interface Props {
  date: DateString;
  posts: string[];
  tags: TagData[];
  archives: ArchiveData[];
}

export default function CreatedAt({ tags, archives, date, posts }: Props) {
  return (
    <Page>
      <Layout>
        <PostsMenuLayout tags={tags} archives={archives}>
          <ContentHeading>{`${toFormattedArchiveDate(date)}`}</ContentHeading>
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
