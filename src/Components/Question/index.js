import React from "react";
import './index.scss'
import Player from "../../UI/Player";


const Question = ({isGuessed, bird}) => {
  return (

    <div className="question">

      {
        (!isGuessed
          ? <div className="question__image_anonym"></div>
          : <img className="question__image" src={bird.image} alt="bird"/>
        )
      }

      <div className="question__info">
        {
          (!isGuessed
              ? <p>******</p>
              : <p>{bird.name}</p>
          )
        }
        <hr/>
        <Player
          audio={bird.audio}
        />
      </div>

    </div>
  )
}

export default Question