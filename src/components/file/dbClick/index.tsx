import { useNavigate } from "react-router-dom";
import "./style.css";

interface PropsType {
  path: string | number;
  wayFinder?: () => void;
  imageSrc: string;
  fileText: string;
}

function DBClickFile({ path, fileText, imageSrc }: PropsType) {
  const Navi = useNavigate();

  const TOPATH = () => Navi(path as never);
  return (
    <div className="file-selector" onDoubleClick={TOPATH}>
      <img className="file-img" src={imageSrc} />
      <div className="file-text">{fileText}</div>
    </div>
  );
}

export default DBClickFile;
