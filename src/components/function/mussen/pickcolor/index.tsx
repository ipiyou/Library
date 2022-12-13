import { useRef, useEffect } from "react";
import "./style.css";

function ColorPicker() {
  const Ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canv = Ref.current;
    canv?.addEventListener("mousedown", (e) => {
      const { offsetX, clientY } = e;
      console.log(offsetX, clientY);
    });
    
  }, []);
  return (
    <div className="colorpicker-wrap">
      <canvas id="colorpicker-canvas" ref={Ref} />
      {Math.atan(5 / 100) / (Math.PI / 180)}
    </div>
  );
}

export default ColorPicker;
