
import React from "react"
import { Link } from 'gatsby'
import { BackgroundImage } from '../content'

const PostSummary = ({ post }) => (
	<Link
		to={`${post.fields.slug}`}
		css={`
			${tw`max-w-lg w-full lg:flex mx-auto mt-10`}
			&:hover h2 {
				${tw`text-primary`}
			}
		`}
	>
		<div css={tw`h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t text-center overflow-hidden`}>
			<BackgroundImage fluid={post.frontmatter.image.childImageSharp.fluid} height='100%'></BackgroundImage>
		</div>
		<div css={tw`border-solid border-r border-b border-l border-t border-grey-light hover:border-primary bg-white rounded-b-r p-6 pr-12 flex flex-col justify-between leading-normal`}>
			<div css={tw`text-sm text-grey`}>
				{post.frontmatter.tags.join(', ')}
			</div>
			<h2 css={tw`m-0 text-black font-bold text-xl`}>
				{post.frontmatter.title}
			</h2>
			<p css={tw`text-grey-dark text-base`}>
					{post.frontmatter.description}
			</p>
		</div>
	</Link>
)

export default PostSummary;
