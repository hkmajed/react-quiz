function FinishedScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        you scored <strong> {points} </strong> out of {maxPoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore : {highscore}) </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishedScreen;
