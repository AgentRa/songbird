import React from "react";
import "./index.scss"
import Player from "../../UI/Player";

const Description = props => {

  return (
    <div className="description">
      <div>
        <div className="image"></div>
        <div>
          <h3>Журавль</h3>
          <hr/>
          <h4>Grus grus</h4>
          <hr/>
          <Player/>
        </div>
      </div>
      <p>Журавли прикольные</p>
    </div>
  )
}

export default Description;