import { FileListType } from "..";
import FileList from "../../../components/file";

function Mussen() {
  const Files: FileListType = [{ fileName: "zoom" }];
  return <FileList fileList={Files} />;
}

export default Mussen;
