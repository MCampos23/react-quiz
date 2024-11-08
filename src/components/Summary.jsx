import React, { useEffect, useState } from "react";
import quizComplete from "../assets/quiz-complete.png";

export default function Summary({ userAnswers, questions, userName, numberOfQuestions, secondsPerQuestion }) {
  const [previousResults, setPreviousResults] = useState([]);
  const [isFirstAttempt, setIsFirstAttempt] = useState(true); // Nueva variable de estado

  useEffect(() => {
    // Obtener los resultados previos almacenados en localStorage
    const storedResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    setPreviousResults(storedResults.reverse());

    // Si es la primera vez que se ejecuta, no almacenamos el resultado del quiz actual
    setIsFirstAttempt(false);
  }, []); // Solo se ejecuta al montar el componente

  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );

  const skipedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skipedAnswersShare - correctAnswersShare;

  const gameData = {
    numberOfQuestions: numberOfQuestions,
    secondsPerQuestion: secondsPerQuestion,
    skipedAnswersShare: skipedAnswersShare,
    correctAnswersShare: correctAnswersShare,
    wrongAnswersShare: wrongAnswersShare,
    date: new Date(),
  };

  // Guardar el nuevo resultado en localStorage (solo si no es el primer intento)
  useEffect(() => {
    if (!isFirstAttempt) {
      const storedResults =
        JSON.parse(localStorage.getItem("gameResults")) || [];
      storedResults.push(gameData);
      localStorage.setItem("gameResults", JSON.stringify(storedResults));
    }
  }, [userAnswers, isFirstAttempt]); // Guardamos después de un cambio en userAnswers y si no es el primer intento

  return (
    <div id="summary">
      <img src={quizComplete} alt="You have finished the quiz" />
      <h2>Quiz Completed</h2>
      <h4>{userName}</h4>
      <div id="summary-stats">
        <p>
          <span className="number">{skipedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        <button onClick={() => window.location.reload()}>Try again</button>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
      <hr />

      {/* Mostrar los resultados anteriores */}
      <div id="previous-results">
        <h3 id="previous-results-title">Previous Results</h3>
        {previousResults.length > 0 ? (
          <ul>
            {previousResults.map((result, index) => (
              <li key={index} className="previous-result">
                <p>
                  <strong>
                    Fecha: {new Date(result.date).toLocaleString()}
                  </strong>
                </p>
                <p className="user-answer">Number of questions: {result.numberOfQuestions}</p>
                <p className="user-answer">Seconds per Question: {result.secondsPerQuestion /2000}</p>
                <p className="user-answer correct">Correct Answers: {result.correctAnswersShare}%</p>
                <p className="user-answer skipped">Skipped Answers: {result.skipedAnswersShare}%</p>
                <p className="user-answer wrong">Incorrect Answers: {result.wrongAnswersShare}%</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No previous results available.</p>
        )}
      </div>
    </div>
  );
}
