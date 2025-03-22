<<<<<<< HEAD
function NextButton({ dispatch, answer }) {
  if (answer === null) return;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
=======
function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
>>>>>>> 2740c07 (developed more components and logics)
}

export default NextButton;
