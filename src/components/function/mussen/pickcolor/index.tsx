import { useRef, useState, useEffect } from "react";
import "./style.css";

interface PosType {
  curX: number;
  curY: number;
}

const getAbsoluteLocation = (angle: number) => {
  const x = Math.cos((angle * Math.PI) / 180) * 100;
  const y = Math.sin((angle * Math.PI) / 180) * 100;
};

const quadrantSelector = (width: number, height: number, pos: PosType) => {
  const { curX, curY } = pos;
  if (curX > width / 2) {

  } else {
  }
  if (curY) {
  } else {
  }
  const angle = Math.atan(curX / curY) / (Math.PI / 180);
};

function ColorPicker() {
  const Ref = useRef<HTMLCanvasElement>(null);
  const [pos, setPos] = useState<PosType>({
    curX: 0,
    curY: 0,
  });

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
    </div>
  );
}

export default ColorPicker;
