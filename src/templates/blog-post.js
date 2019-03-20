import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Post } from '../components/blog'

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<Post post={post}></Post>
		</Layout>
	)
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      	id
				rawMarkdownBody
				frontmatter {
					date(formatString: "MMMM DD, YYYY")
					title
					tags
				}
    }
  }
`
