import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./styles.css";

const App = props => {
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{props.counter}</div>
      <ButtonSet />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const Counter = connect(
  mapStateToProps,
  null
)(App);

const Buttons = props => {
  return (
    <React.Fragment>
      <button onClick={props.add}>+</button>
      <button onClick={props.minus}>-</button>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    add: () =>
      dispatch({
        type: "add"
      }),
    minus: () =>
      dispatch({
        type: "minus"
      })
  };
};

const ButtonSet = connect(
  null,
  mapDispatchToProps
)(Buttons);

const initialState = { counter: 0 };
const reducer = (state = initialState, action) => {
  if (action.type === "add") {
    return { ...state, ...{ counter: state.counter + 1 } };
  } else if (action.type === "minus") {
    return { ...state, ...{ counter: state.counter - 1 } };
  }
  return { ...state };
};
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
