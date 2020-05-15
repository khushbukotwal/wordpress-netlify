import React from "react"
import ReactPlayer from "react-player"

const Video = ({ props }) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        url={props.video}
        style={{ position: "absolute", top: "0", left: "0" }}
        width="100%"
        height="100%"
        // config={{
        //   youtube: {
        //     embedOptions: {
        //       host: "http://localhost:8000",
        //     },
        //   },
        // }}
      />
    </div>
  )
}

export default Video
