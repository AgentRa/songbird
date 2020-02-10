import React from "react";
import './index.scss'
import AudioPlayer from "react-h5-audio-player";

const Question = props => {

  return (
    <div className="question">
      <div className="question__image_anonym"></div>
      <div className="question__info">
        <p>******</p>
        <hr/>
        <AudioPlayer
          src="https://www.xeno-canto.org/sounds/uploaded/UTLQZLKDQX/XC308330-House%20Crow.mp3"
          onPlay={e => console.log("onPlay")}
        />
      </div>

    </div>
  )
}

export default Question