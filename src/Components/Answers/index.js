import React from "react";
import "./index.scss"

const Answers = props => {

  return (
    <form action="#" className="answers__list ">
      <p>
        <label >
          <input name="group1" type="radio" className="blue lighten-2"/>
          <span >Ворон</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group2" type="radio" className="blue lighten-2"/>
          <span>Журавль</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group3" type="radio" className="blue lighten-2"/>
          <span>Ласточка</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group4" type="radio" className="blue lighten-2"/>
          <span>Козодой</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group5" type="radio" className="blue lighten-2"/>
          <span>Кукушка</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group6" type="radio" className="blue lighten-2"/>
          <span>Синица</span>
        </label>
      </p>
    </form>
  )
}

export default Answers;