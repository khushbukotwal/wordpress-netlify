import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Page = ({ data }) => {
  return (
    <Layout>
      <h1>{data.wordpressPage.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
      ></div>
      {/* <h1>{homeText}</h1> */}
    </Layout>
  )
}

export default Page

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
