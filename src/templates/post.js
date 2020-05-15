import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Post = ({ data }) => {
  return (
    <Layout>
      <h1>{data.wordpressPost.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
      ></div>
      {/* <h1>{homeText}</h1> */}
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
