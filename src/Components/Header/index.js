import React from "react";
import "./index.scss";

const Header = props => {

  return (
    <div>
      <div className="upper">
        <div className="upper__logo"></div>
        <p className="upper__score">Score: </p>
      </div>
      <nav>
        <div className="nav-wrapper">
          <ul className="col s12 blue lighten-2">
            <li className="breadcrumb">Разминка</li>
            <li className="breadcrumb">Воробьиные</li>
            <li className="breadcrumb">Лесные птицы</li>
            <li className="breadcrumb">Певчие птицы</li>
            <li className="breadcrumb">Хищные птицы</li>
            <li className="breadcrumb">Морские птицы</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header