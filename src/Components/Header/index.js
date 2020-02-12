import React from "react";
import "./index.scss";

const Header = ({score, activeQuestion}) => {

  const itemList = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы"
  ]

  return (
    <div>
      <div className="upper">
        <div className="upper__logo"></div>
        <p className="upper__score">Score: {score}</p>
      </div>
          <ul className="col s12 blue lighten-2">
            {itemList.map((item, idx) => {
              return(<li
                key={new Date() + idx}
                className={
                idx === activeQuestion
                ? "breadcrumb actv"
                : "breadcrumb"}>{item}</li>)
            })}
          </ul>
    </div>
  )
}

export default Header