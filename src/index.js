import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import rootReducer from "./components/Redux/Reducer"

/*
const initialState = {
    count: 0,
    text: "fsaffsfa"
  };

  function reducer(state = initialState, action) {

    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
          text: action.text
        };
      case "DECREMENT":
        return {
          count: state.count - 1
        };
      case "RESET":
        return {
          count: 0
        };
      default:
        return state;
    }
  
    return state;
  }*/

const store = createStore(rootReducer);

//store.dispatch({ type: "OPEN_MODAL" });

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

