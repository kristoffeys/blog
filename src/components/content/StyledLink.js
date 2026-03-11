import React from "react"
import { Link } from "gatsby"

export const StyledLink = ({ to, children, ...props }) => (
  <Link to={to} className="text-primary" {...props}>{children}</Link>
)
