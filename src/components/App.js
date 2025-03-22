import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
<<<<<<< HEAD
=======
import FinishedScreen from "./FinishedScreen";
>>>>>>> 2740c07 (developed more components and logics)

const initialState = {
  questions: [],

  // loading , error , ready , active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
<<<<<<< HEAD
=======
  highscore: 0,
>>>>>>> 2740c07 (developed more components and logics)
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
<<<<<<< HEAD
=======
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

>>>>>>> 2740c07 (developed more components and logics)
    default:
      throw new Error("unknown action");
  }
}
function App() {
<<<<<<< HEAD
  const [{ status, questions, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );
=======
  const [{ status, questions, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);
>>>>>>> 2740c07 (developed more components and logics)

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={numQuestions}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
<<<<<<< HEAD
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
=======
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
            />
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
>>>>>>> 2740c07 (developed more components and logics)
      </Main>
    </div>
  );
}

export default App;
