import React from "react"

const RichText = ({ props }) => {
  return <div dangerouslySetInnerHTML={{ __html: props.rich_text }}></div>
}

export default RichText
