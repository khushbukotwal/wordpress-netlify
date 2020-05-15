import React from "react"
import { Link } from "gatsby"

const FeaturedPosts = ({ props }) => {
  return (
    <p>
      <Link to={`/${props.post_name}`}>{props.post_title}</Link>
    </p>
  )
}

export default FeaturedPosts
