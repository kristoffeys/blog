import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostSummary from "../components/blog/PostSummary"
import Paginator from "../components/paginator"

const BlogIndexPage = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <PostSummary post={post} />
          </li>
        ))}
      </ul>
      <Paginator
        totalPages={pageContext.totalPages}
        currentPage={pageContext.currentPage}
        basePath={pageContext.basePath}
      />
    </Layout>
  )
}

export default BlogIndexPage

export const query = graphql`
  query BlogIndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            image
          }
        }
      }
    }
  }
`
