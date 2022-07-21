import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Keyboard from './Keyboard.js';

ReactDOM.render(<App/>, document.querySelector("#root"));
ReactDOM.render(<Keyboard/>, document.querySelector("#nums"));
/*const myapp = createRoot(<App/>);
root.render(myapp);*/