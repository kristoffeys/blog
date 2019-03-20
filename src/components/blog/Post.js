import React from "react"
import Markdown from 'react-markdown'
import { CodeBlock } from '../content/CodeBlock';

const Post = ({post}) => (
	<article css={tw`mt-10`}>
		<h1 css={tw`text-primary text-center text-4xl px-16 py-10`}>{post.frontmatter.title}</h1>
		<Markdown
			source={post.rawMarkdownBody}
		renderers={{code: CodeBlock}}
		></Markdown>
	</article>
);

export default Post;
