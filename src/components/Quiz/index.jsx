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
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    if (questions.data != null) questAmount.current = questions.data.length;
  }, [questions]);

  const incrementQuestIter = () => {
    if (questIter < questAmount.current - 1) setQuestIter(questIter + 1);
    else {
      setSeeResult(true);
    }
  };

  const incrementCorrect = () => {
    setCorrect(correct + 1);
  };

  const toggleResult = () => {
    setSeeResult(!seeResult);
    setQuestIter(0);
  };

  if (questions.isLoading || questions.data == null) {
    return (
      <div className="Loading flex justify-center">
        <Oval />
      </div>
    );
  } else {
    let currentQuestion = questions.data[questIter];
    let progress = (questIter / (questAmount.current - 1)) * 100;

    return (
      <div className="Content flex-col mt-10">
        <div className="Wrapper flex justify-center">
          <div className="Question rounded-md w-4/5 h-4/5">
            {seeResult ? (
              <QuestResult
                method={toggleResult}
                data={{ correct: correct, total: questAmount.current }}
              />
            ) : currentQuestion.type == "single" ? (
              <SingleQuest
                question={currentQuestion.question}
                answer={currentQuestion.answer}
                options={currentQuestion.options}
                method1={incrementQuestIter}
                method2={incrementCorrect}
              />
            ) : currentQuestion.type == "multiple" ? (
              <MultiQuest
                question={currentQuestion.question}
                answer={currentQuestion.answer}
                options={currentQuestion.options}
                method1={incrementQuestIter}
                method2={incrementCorrect}
              />
            ) : currentQuestion.type == "boolean" ? (
              <BoolQuest
                question={currentQuestion.question}
                answer={currentQuestion.answer}
                method1={incrementQuestIter}
                method2={incrementCorrect}
              />
            ) : null}
          </div>
        </div>

        {!seeResult ? (
          <div className="Progress mt-10 p-4 bg-gray-300 rounded-xl w-full">
            <ProgressBar now={progress} label={`${progress}%`} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Quiz;
