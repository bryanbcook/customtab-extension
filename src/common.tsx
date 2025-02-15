import "es6-promise/auto";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./common.scss";

export function showRootComponent(component: React.ReactElement<any>): void {
  ReactDOM.render(component, document.getElementById("root"));
}