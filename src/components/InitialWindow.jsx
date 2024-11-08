export default function InitialWindow({
  onChangeNumberOfQuestions,
  onChangeSecondsPerQuestions
}) {
  function handleQuestionsChange(e) {
    onChangeNumberOfQuestions(e.target.value);
  }

  function handleSecondsChange(e) {
    onChangeSecondsPerQuestions(e.target.value * 1000);
  }



  return (
    <div className="initial-window">
      <h2>Set up your quiz</h2>
      <p>How many questions you would like to answer?</p>
      <select onChange={handleQuestionsChange}>
        <option></option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <p>How many seconds per question you would like to have?</p>
      <select onChange={handleSecondsChange}>
        <option></option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}
