import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PostSummary } from '../components/blog'
import Paginator from '../components/paginator'


const BlogIndexPage = ({ data, pageContext }) => {
	const { edges: posts } = data.allMarkdownRemark

	return (
		<Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			<ul>
				{posts.map(data => {
						const { node: post } = data
						return (
							<li key={post.id}>
								<PostSummary post={post}></PostSummary>
							</li>
						)
					}
				)}
			</ul>

		<Paginator totalPages={pageContext.totalPages} currentPage={pageContext.currentPage} basePath={pageContext.basePath} />
		</Layout>
	)
}

export default BlogIndexPage


export const query = graphql`
  query BlogIndexQuery($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] },
			filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
			limit: $limit
			skip: $skip
	  ) {
			edges {
				node {
					id
					html
					fields {
						slug
					},
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title,
						description,
						tags,
						image {
							childImageSharp {
								fluid(maxWidth: 1200, quality: 100) {
								  ...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
    }
  }
`
