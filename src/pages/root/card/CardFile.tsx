import { FileListType } from "..";
import { CardAround } from "../../../assets";
import FilesWrapper from "../../../components/file";

function CardFile() {
  const Files: FileListType = [{ fileName: "cardAround", icon: CardAround }];
  return <FilesWrapper fileList={Files} />;
}

export default CardFile;
