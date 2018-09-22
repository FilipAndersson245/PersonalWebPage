import * as React from "react";
import * as ReactDOM from "react-dom";

const name = "Hello world!";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById("root"));
