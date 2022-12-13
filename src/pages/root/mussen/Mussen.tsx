import { FileListType } from "..";
import FileList from "../../../components/file";

function Mussen() {
  const Files: FileListType = [{ fileName: "zoom" }, { fileName: "pickcolor" }];
  return <FileList fileList={Files} />;
}

export default Mussen;
