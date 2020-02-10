import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./index.scss"

const Description = props => {

  return (
    <div>
      <div>
        <div className="image"></div>
        <div>
          <h3>Журавль</h3>
          <hr/>
          <h4>Grus grus</h4>
          <hr/>
          <AudioPlayer/>
        </div>
      </div>
      <p>Журавли прикольные</p>
    </div>
  )
}

export default Description;