import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";
import InitialWindow from "./InitialWindow";
import QuestionProgress from "./QuestionProgress";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(null);

  const activeQuestionIndex = userAnswers.length;
  const isFinished = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isFinished) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      {!numberOfQuestions || !secondsPerQuestion ? (
        <InitialWindow
          onChangeNumberOfQuestions={setNumberOfQuestions}
          onChangeSecondsPerQuestions={setSecondsPerQuestion}
        />
      ) : (
        <>
          <QuestionProgress
            activeQuestionIndex={activeQuestionIndex}
            userAnswers={userAnswers}
            numberOfQuestions={numberOfQuestions}
          />
          <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            secondsPerQuestion={secondsPerQuestion}
          />
        </>
      )}
    </div>
  );
}
