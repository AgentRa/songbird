import React from "react";
import "./index.scss"
import AudioPlayer from "react-h5-audio-player";

const Player = props => {

  return (
    <AudioPlayer
      src="https://www.xeno-canto.org/sounds/uploaded/UTLQZLKDQX/XC308330-House%20Crow.mp3"
      onPlay={e => console.log("onPlay")}
    />
  )
}

export default Player;