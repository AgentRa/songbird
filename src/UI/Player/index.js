import React from "react";
import "./index.scss";
import AudioPlayer from "react-h5-audio-player";
import birdsData from "../../assets/birdsData";

const Player = ({audio}) => {

  return (
    <AudioPlayer
      src={`${audio}`}
      onPlay={e => console.log("onPlay")}
    />
  )
}

export default Player;