import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import rehypeReact from "rehype-react"
import { GLSLFragCanvas } from "../components/glsl-frag-canvas"

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  LineShareButton,
  LineIcon,
} from "react-share"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "glsl-frag-canvas": GLSLFragCanvas,
  },
}).Compiler

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const shareUrl = location.href
  const shareTitle = `${siteTitle} - ${post.frontmatter.title}`
  const title = siteTitle

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <p>
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <TwitterIcon size={28} round />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} title={shareTitle}>
              <FacebookIcon size={28} round />
            </FacebookShareButton>
            <EmailShareButton url={shareUrl} title={shareTitle}>
              <EmailIcon size={28} round />
            </EmailShareButton>
            <LineShareButton url={shareUrl} title={title}>
              <LineIcon size={28} round />
            </LineShareButton>
          </p>
        </header>
        <section>{renderAst(post.htmlAst)}</section>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
