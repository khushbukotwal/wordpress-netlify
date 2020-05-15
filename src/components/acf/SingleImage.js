import React from "react"
import Img from "gatsby-image"

const SingleImage = ({ props }) => {
  return (
    <>
      {/* <img src={props.single_image.source_url} alt="" /> */}
      <Img fluid={props.single_image.localFile.childImageSharp.fluid} />
    </>
  )
}

export default SingleImage
