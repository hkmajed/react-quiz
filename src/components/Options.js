function Options({ question }) {
  return (
    <div className="options">
      {question.option.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}
export default Options;
