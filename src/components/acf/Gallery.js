import React from "react"
import Img from "gatsby-image"

const Gallery = ({ props }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "2rem",
      }}
    >
      {props.gallery.map(image => (
        <Img
          key={image.id}
          style={{ width: "100%" }}
          fluid={image.localFile.childImageSharp.fluid}
        />
      ))}
    </div>
  )
}

export default Gallery
