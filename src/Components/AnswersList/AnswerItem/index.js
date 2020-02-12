import React, {useState} from "react";
import "./index.scss";

const AnswerItem = ({bird, idx, rightAnswerId, isGuessed}) => {
  let [answerClasses, setAnswerClasses] = useState(["empty"])

  return (
    <li className="bird"
      onClick={() => idx === rightAnswerId
        ? setAnswerClasses(["empty right"])
        : setAnswerClasses(["empty wrong"])
      }
    >
      {/*<input*/}
      {/*  name={`group${idx}`}*/}
      {/*  type="radio"*/}
      {/*/>*/}
      <div
        className={answerClasses.join(' ')}
      ></div>
      {bird.name}
  </li>
  )
}

export default AnswerItem;