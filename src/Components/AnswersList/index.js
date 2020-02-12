import React from "react";
import "./index.scss"
import AnswerItem from "./AnswerItem";
import key from "weak-key";

const Answers = ({answers, rightAnswerId}) => {

  return (
    <form action="#" className="answers__list">
      {
        answers.map((bird, idx) => {
          return (
            <AnswerItem
              bird={bird}
              idx={idx}
              rightAnswerId={rightAnswerId}
              key={key(bird)}
            />
          )
        })
      }
    </form>
  )
}

export default Answers;