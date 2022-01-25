import React, { useState, useEffect, useRef } from "react";
import { Oval } from "react-loader-spinner";
import { ProgressBar } from "react-bootstrap";
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
    }
  };

  const toggleResult = () => {
    setSeeResult(!seeResult);
    setQuestIter(0);
  };

  if (questions.isLoading || questions.data == null) {
    return (
      <div className="Loading">
        <Oval />
      </div>
    );
  } else {
    let currentQuestion = questions.data[questIter];
    let progress = (questIter / (questAmount.current - 1)) * 100;

    return (
      <div className="Content">
        <div className="Question">
          {seeResult ? (
            <QuestResult method={toggleResult} />
          ) : currentQuestion.type == "single" ? (
            <SingleQuest
              question={currentQuestion.question}
              answer={currentQuestion.answer}
              method={incrementQuestIter}
            />
          ) : currentQuestion.type == "multiple" ? (
            <MultiQuest
              question={currentQuestion.question}
              answer={currentQuestion.answer}
              method={incrementQuestIter}
            />
          ) : currentQuestion.type == "boolean" ? (
            <BoolQuest
              question={currentQuestion.question}
              answer={currentQuestion.answer}
              method={incrementQuestIter}
            />
          ) : null}
        </div>

        {!seeResult ? (
          <div className="Progress">
            <ProgressBar now={progress} label={`${progress}%`} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Quiz;
