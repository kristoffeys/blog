import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import { CodeBlock } from "../../components/content/CodeBlock"

const BlogPostPreview = ({ entry }) => (
  <article className="mt-10">
    <h1 className="text-center text-4xl px-16 py-10" style={{ color: "#3490dc" }}>
      {entry.getIn(["data", "title"])}
    </h1>
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
      {entry.getIn(["data", "body"])}
    </ReactMarkdown>
  </article>
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
