
export default function QuestionProgress({activeQuestionIndex, userAnswers, questions}) {
    return(
        <div className="question-progress">
        {questions.map((question, index) => {
          let cssClass = "question-number";
          let isCorrect = userAnswers[index] === questions[index].answers[0];

          if (index < activeQuestionIndex && activeQuestionIndex > 0) {
            if (isCorrect) {
              cssClass += " correct";
            }
            if (userAnswers[index] === null) {
              cssClass += " skipped";
            }
            if (!isCorrect && userAnswers[index] !== null) {
              cssClass += " incorrect";
            }
          }

          if (index === activeQuestionIndex) {
            cssClass += " current";
          }

          return (
            <div key={question.id} className={cssClass}>
              {index + 1}
            </div>
          );
        })}
      </div>
    )
}