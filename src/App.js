import React from 'react';
import Header from "./Components/Header";
import Question from "./Components/Question";
import AnswersList from "./Components/AnswersList";
import Description from "./Components/Description";
import birdsData from "./assets/birdsData";
import randomNumber from "./Utils/randomNumber";

export default class App extends React.Component {

  state = {
    score: 0,
    activeQuestion: 0,
    rightAnswerId: randomNumber(1, 6),
    isFinished: false,
    isGuessed: true,
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
        />
        <Question
          isGuessed={this.state.isGuessed}
          bird={birdsData[this.state.activeQuestion][this.state.rightAnswerId - 1]}
        />
        <div className="App__answers">
          <AnswersList
            answers={birdsData[this.state.activeQuestion]}
            rightAnswerId={this.state.rightAnswerId}
            isGuessed={this.state.isGuessed}
          />
          <Description/>
        </div>
        <button
          className="waves-effect waves-light btn blue lighten-2"
          disabled={!this.state.isGuessed}
        >Next level</button>
      </div>
    )
  }
}
