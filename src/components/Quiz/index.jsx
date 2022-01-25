import React, { useState, useEffect, useRef } from "react";
import { Oval } from "react-loader-spinner";
import useQuiz from "../api/useQuiz";
import SingleQuest from "../Questions/Single";
import MultiQuest from "../Questions/Multi";
import BoolQuest from "../Questions/Bool";
import QuestResult from "../Questions/Result";

function Quiz() {
  const questions = useQuiz();
  const [questIter, setQuestIter] = useState(0);
  const questAmount = useRef(0);
  const [seeResult, setSeeResult] = useState(false);

  useEffect(() => {
    if (questions.data != null) questAmount.current = questions.data.length;
  }, [questions]);

  const incrementQuestIter = () => {
    if (questIter < questAmount.current - 1) setQuestIter(questIter + 1);
    else {
      setSeeResult(true);
      setQuestIter(0);
    }
  };

  const toggleResult = () => {
    setSeeResult(!seeResult);
  };

  if (questions.isLoading || questions.data == null) {
    return (
      <div className="Loading">
        <Oval />
      </div>
    );
  } else if (!seeResult) {
    let currentQuestion = questions.data[questIter];

    switch (currentQuestion.type) {
      case "single":
        return (
          <SingleQuest
            question={currentQuestion.question}
            answer={currentQuestion.answer}
            method={incrementQuestIter}
          />
        );

      case "multiple":
        return (
          <MultiQuest
            question={currentQuestion.question}
            answer={currentQuestion.answer}
            method={incrementQuestIter}
          />
        );

      case "boolean":
        return (
          <BoolQuest
            question={currentQuestion.question}
            answer={currentQuestion.answer}
            method={incrementQuestIter}
          />
        );

      default:
        return null;
    }
  } else {
    return <QuestResult method={toggleResult} />;
  }
}

export default Quiz;
