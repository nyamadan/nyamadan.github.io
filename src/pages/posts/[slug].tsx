import React from "react";
import { useRouter } from "next/router";
import Seo from "components/Seo";
import { getPostData } from "lib/post";
import Layout from "../../components/Layout";
import getSlugs from "../../lib/server/slugs";
import ogp from "../../lib/server/write_ogp_image";
import PostLayout from "../../components/PostLayout";
import PostComponent from "../../components/Post";
import Page from "../../components/Page";

interface Props {
  slug: string;
}

export default function Post({ slug }: Props) {
  const router = useRouter();
  const { description, tags, title } = getPostData(slug);

  return (
    <Page>
      <Seo
        title={`${title} - nyamadan.github.io`}
        description={description}
        keyword={tags.join(",")}
        url={`${process.env.baseUrl}${router.asPath}`}
        image={`${process.env.baseUrl}/images/ogp/posts/${slug}.png`}
      />
      <Layout>
        <PostLayout slug={slug}>
          <PostComponent slug={slug} />
        </PostLayout>
      </Layout>
    </Page>
  );
}

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
