import React from "react"
import Img from "gatsby-image"

const Team = ({ props }) => {
  return (
    <ul>
      {props.team.map(item => (
        <li key={item.team_name}>
          <Img fluid={item.team_image.localFile.childImageSharp.fluid} />
          <p>
            {item.team_name} - {item.team_position}
          </p>
          <p>{item.team_bio}</p>
        </li>
      ))}
    </ul>
  )
}

export default Team
