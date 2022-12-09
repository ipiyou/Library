import { useLocation } from "react-router-dom";
import { BackSpace, FileImg } from "../../assets";
import DBClickFile from "./dbClick";
import "./style.css";

interface PropsType {
  fileList: string[];
}

function FilesWrapper({ fileList }: PropsType) {
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
      {pathname !== "/" && (
        <DBClickFile
          path={-1}
          fileText="뒤로가기"
          imageSrc={BackSpace}
        />
      )}
      {fileList.map((Text, index) => (
        <DBClickFile
          key={index}
          path={Text}
          fileText={Text}
          imageSrc={FileImg}
        />
      ))}
    </div>
  );
}

export default FilesWrapper;
