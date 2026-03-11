import React from "react"
import { Link } from "gatsby"

const Paginator = ({ basePath, totalPages, currentPage }) => {
  if (totalPages > 1) {
    return (
      <div className="text-center">
        <ul className="inline-flex border border-gray-300 w-auto">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={`pagination-number${i + 1}`}>
              <Link
                to={`/${basePath}/${i === 0 ? "" : i + 1}`}
                className="block hover:text-white hover:bg-primary text-primary border-r border-gray-300 px-3 py-2"
              >
                {i + 1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}

export default Paginator
