import { useRef, useEffect } from "react";
import "./style.css";

function Zoom() {
  const Ref = useRef<HTMLCanvasElement>(null);

  const init = () => {
    const canv = Ref.current?.getContext("2d");
    if (!canv) return;

    canv.fillStyle = "blue";
    canv.fillRect(10, 10, 10, 10);
  };

  useEffect(() => {
    const canv = Ref.current;
    if(!canv) return;

    canv.addEventListener("wheel",)
  },[])

  return (
    <div className="canvas-wrapper">
      <canvas id="canvas" ref={Ref} width="500px" height="400px" />
    </div>
  );
}

export default Zoom;
