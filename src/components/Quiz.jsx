import { useState, useCallback, useMemo } from "react";
import Question from "./Question";
import QUESTIONS from "../questions.js";
import Summary from "./Summary";
import InitialWindow from "./InitialWindow";
import QuestionProgress from "./QuestionProgress";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(null);

  const activeQuestionIndex = userAnswers.length;
  const isFinished = activeQuestionIndex === parseInt(numberOfQuestions);

  const questions = useMemo(() => QUESTIONS.sort(() => Math.random() - 0.5).slice(
    0,
    numberOfQuestions
  ), [numberOfQuestions]);

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
    return <Summary userAnswers={userAnswers} questions={questions} />;
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
            questions={questions}
          />
          <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            secondsPerQuestion={secondsPerQuestion}
            questions={questions}
          />
        </>
      )}
    </div>
  );
}
