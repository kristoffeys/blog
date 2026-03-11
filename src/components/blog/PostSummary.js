import React from "react"
import { Link } from "gatsby"

const PostSummary = ({ post }) => (
  <Link
    to={`${post.fields.slug}`}
    className="block max-w-lg w-full lg:flex mx-auto mt-10 group"
  >
    <div className="h-48 lg:h-auto lg:w-48 flex-none rounded-t text-center overflow-hidden">
      {post.frontmatter.image && (
        <img
          src={post.frontmatter.image}
          alt={post.frontmatter.title}
          className="h-full w-full object-cover"
        />
      )}
    </div>
    <div className="border border-gray-300 group-hover:border-primary bg-white rounded-br p-6 pr-12 flex flex-col justify-between leading-normal">
      <div className="text-sm text-gray-500">
        {post.frontmatter.tags.join(", ")}
      </div>
      <h2 className="m-0 text-black font-bold text-xl group-hover:text-primary">
        {post.frontmatter.title}
      </h2>
      <p className="text-gray-600 text-base">
        {post.frontmatter.description}
      </p>
    </div>
  </Link>
)

export default PostSummary
