import { useLocation } from "react-router-dom";
import { BackSpace, FileImg } from "../../assets";
import { FileListType } from "../../pages/root";
import DBClickFile from "./dbClick";
import "./style.css";

interface PropsType {
  fileList: FileListType;
}

function FilesWrapper({ fileList }: PropsType) {
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
      {pathname !== "/" && (
        <DBClickFile path={-1} fileText="뒤로가기" imageSrc={BackSpace} />
      )}
      {fileList.map((fileData, index) => (
        <DBClickFile
          key={index}
          path={fileData.fileName}
          fileText={fileData.fileName}
          imageSrc={fileData.icon || FileImg}
        />
      ))}
    </div>
  );
}

export default FilesWrapper;
