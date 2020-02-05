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
          <div className="col s12 blue lighten-2">
            <div className="breadcrumb">Разминка</div>
            <div className="breadcrumb">Воробьиные</div>
            <div className="breadcrumb">Лесные птицы</div>
            <div className="breadcrumb">Певчие птицы</div>
            <div className="breadcrumb">Хищные птицы</div>
            <div className="breadcrumb">Морские птицы</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header