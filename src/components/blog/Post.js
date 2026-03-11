import React from "react"
import ReactMarkdown from "react-markdown"
import { CodeBlock } from "../content/CodeBlock"

const Post = ({ post }) => (
  <article className="mt-10">
    <h1 className="text-primary text-center text-4xl px-16 py-10">{post.frontmatter.title}</h1>
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <CodeBlock language={match[1]} value={String(children).replace(/\n$/, "")} />
          ) : (
            <code className={className} {...props}>{children}</code>
          )
        },
      }}
    >
      {post.rawMarkdownBody}
    </ReactMarkdown>
  </article>
)

export default Post
