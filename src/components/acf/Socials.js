import React from "react"

const Socials = ({ props }) => {
  return (
    <>
      {props.socials.map(social => (
        <p key={social.social_name}>
          <a href={social.social_link}>{social.social_name}</a>
        </p>
      ))}
    </>
  )
}

export default Socials
