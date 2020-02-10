import React from 'react';
import Header from "./Components/Header";
import Question from "./Components/Question";
import Answers from "./Components/Answers";
import Description from "./Components/Description";

function App() {
  return (
    <div className="App">
      <Header />
      <Question />
      <div className="App__answers">
        <Answers/>
        <Description/>
      </div>
      <button className="waves-effect waves-light btn blue lighten-2">Next level</button>
    </div>
  );
}

export default App;
