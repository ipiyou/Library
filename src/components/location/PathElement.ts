import React, { createElement } from "react";

interface PropsType {
  childs: JSX.Element[];
}

function PathElement({ childs }: PropsType) {
  const className = "root-location";
  return createElement("div", { className }, ...childs);
}

export default PathElement;
