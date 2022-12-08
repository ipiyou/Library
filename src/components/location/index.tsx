import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import PathElement from "./PathElement";
import "./style.css";

function Spliter(str: string, word: string) {
  let arr = ["root"];
  let string = "";
  for (let i = 1; i < str.length; i++) {
    if (str[i] === word) {
      arr.push(string);
      string = "";
    } else string += str[i];
  }
  return string ? [...arr, string] : arr;
}

function RootLocation() {
  const { pathname } = useLocation();

  const PathChild = useMemo(() => {
    let strSave = "";
    return Spliter(pathname, "/").map((ele, i, arr) => {
      const isAttach = i !== arr.length - 1 && ele !== "/" ? "/" : "";
      const isFirst = i === 0;
      const PathString = ele + isAttach;
      const PATH = (strSave += isFirst ? "/" : PathString);
      return (
        <span className="topath-click">
          <Link to={PATH}>{PathString}</Link>
        </span>
      );
    });
  }, [pathname]);

  console.log(pathname.split("/"));
  return (
    <div className="white-box">
      <PathElement childs={PathChild} />
    </div>
  );
}

export default RootLocation;
