import { Main_Back } from "../../assets";
import "./style.css";

function BackGround() {
  return (
    <div className="wrapper">
      <div className="title">LIBRARY</div>
      <div className="image-wrapper">
        <img className="background-img" src={Main_Back} />
      </div>
    </div>
  );
}

export default BackGround;
