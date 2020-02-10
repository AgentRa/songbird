import React from "react";
import './index.scss'
import Player from "../../UI/Player";


const Question = props => {

  return (
    <div className="question">
      <div className="question__image_anonym"></div>
      <div className="question__info">
        <p>******</p>
        <hr/>
        <Player/>
      </div>

    </div>
  )
}

export default Question