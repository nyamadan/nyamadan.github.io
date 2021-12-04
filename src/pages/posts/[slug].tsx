import React from "react";
import Seo from "components/Seo";
import { getPostData } from "lib/post";
import Layout from "../../components/Layout";
import getSlugs from "../../lib/server/slugs";
import ogp from "../../lib/server/write_ogp_image";
import PostLayout from "../../components/PostLayout";
import PostComponent from "../../components/Post";
import Page from "../../components/Page";
import ShareButtons from "../../components/ShareButtons";

interface Props {
  slug: string;
}

const Post = function Post({ slug }: Props) {
  const { description, tags, title } = getPostData(slug);
  return (
    <Page>
      <Seo
        title={`${title} - nyamadan.github.io`}
        description={description}
        keyword={tags.join(",")}
        image={`${process.env.baseUrl}/images/ogp/posts/${slug}.png`}
      />
      <Layout>
        <PostLayout slug={slug}>
          <PostComponent slug={slug} />
          <div className="container max-w-xl mx-auto flex justify-start my-4">
            <ShareButtons text={title} />
          </div>
        </PostLayout>
      </Layout>
    </Page>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}): Promise<{ props: Props }> {
  const { slug } = params;
  await ogp(slug);
  return {
    props: {
      slug,
    },
  };
}

export async function getStaticPaths() {
  return { paths: getSlugs().map((slug) => `/posts/${slug}`), fallback: false };
}

export default Post;
